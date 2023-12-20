<template>
  <div class="q-pa-md">
    <!--按钮-->
    <div class="col q-mb-md">
      <div class="row justify-between">
        <div>
          <q-btn color="primary" class="q-mr-md" label="刷新" icon="refresh" @click="refresh" />
          <q-btn color="secondary" class="q-mr-md" label="新增" icon="add" @click="handleNew" />
          <q-btn color="purple" class="q-mr-md" label="修改" icon="update" @click="handleUpdate" />
          <q-btn color="purple" class="q-mr-md" label="修改标签" icon="update" @click="handleUpdateTag" />
          <q-btn color="red" class="q-mr-md" label="删除" icon="delete" @click="handleDelete" />
        </div>
        <!--                <div class="col text-right">-->
        <!--                    <q-input filled dense v-model="searchName" label="姓名" class="inline-block q-mr-sm"-->
        <!--                             @keydown.enter="loadPage"/>-->
        <!--                    <q-input filled dense v-model="searchNumber" label="学号" class="inline-block q-mr-sm"-->
        <!--                             @keydown.enter="loadPage"/>-->
        <!--                    <q-input filled dense v-model="searchClass" label="班级" class="inline-block q-mr-sm"-->
        <!--                             @keydown.enter="loadPage"/>-->
        <!--                    <q-btn color="red" class="inline vertical-top q-mr-sm" label="重置" icon="restart_alt"-->
        <!--                           @click="resetSearch"/>-->
        <!--                    <q-btn color="primary" class="inline vertical-top" label="搜索" icon="search" @click="loadPage"/>-->
        <!--                </div>-->
      </div>
    </div>
    <!-- 表格 -->
    <div>
      <q-table :title="title" :rows="dataList" :columns="currentColumns" row-key="id"
        :pagination="{ rowsNumber: page.pageSize }" selection="multiple" v-model:selected="selected" hide-pagination>
        <template v-slot:body-cell-tag="props">
          <q-td class="text-center">
            <q-badge v-for="tags in props.row.versionEventTag" class="q-mr-md" :color="tags.tag.icon"
              :label="tags.tag.name" />
          </q-td>
        </template>
        <template v-slot:body-cell-startTime="props">
          <q-td :props="props">
            <div>
              {{ sliceDateTime(props.value) }}
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-endTime="props">
          <q-td :props="props">
            <div>
              {{ sliceDateTime(props.value) }}
            </div>
          </q-td>
        </template>
      </q-table>

      <div class="q-pa-lg flex flex-center">
        <q-pagination v-model="page.currentPage" :max="page.totalPage" @update:model-value="loadPage" direction-links />
      </div>
    </div>

    <!--    新增窗口    -->
    <q-dialog v-model="addDialog" position="right" full-height persistent @hide="loadPage">
      <AddDialog :info="info" :column="dialogColumns" />
    </q-dialog>
    <!--    编辑标签    -->
    <q-dialog v-model="tagDialog" persistent @hide="loadPage">
      <TagDialog :tagData="tagCol.id" :title="title" :link="link" :path="path" />
    </q-dialog>
  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios';
import { ref } from 'vue';
import { CommonLoading, CommonSuccess, DialogAlert, LoadingFinish } from "components/commonResults";
import { useQuasar } from "quasar";
import AddDialog from "components/AddDialog.vue";
import { versionEventColumns } from "components/columns";
import { Page } from "components/entity";
import TagDialog from "components/TagDialog.vue";
import { sliceDateTime } from "../../components/utils";

//自定义内容
const page = ref(new Page(1, 10, 1,))
const $q = useQuasar()
const currentColumns = versionEventColumns
const title = '版本活动'
const link = 'version-event'
const path = 'versionEvent'
//加载表格
const dataList = ref([])
const selected = ref([])
const tagCol = ref([])
const tagDialog = ref(false)


loadPage()

function loadPage() {
  CommonLoading($q)
  api.get("/" + link + "-with-tag", {
    params: {
      'page': page.value.currentPage,
      'size': page.value.pageSize,
    }
  }).then((res: any) => {
    dataList.value = res.data.Data
    page.value.total = res.data.Total
    LoadingFinish($q)
  })
}

//刷新表格
function refresh() {
  loadPage()
  CommonSuccess('刷新完成')
}


//弹窗
const addDialog = ref(false)
const info = ref({ title: '', mode: '', link: '', update: '' })
//对studentColumns进行二次修改
let dialogColumns: any = ref([])
currentColumns.forEach((item: any) => {
  dialogColumns.value.push(item)
})

//新增
function handleNew() {
  addDialog.value = true;
  info.value.title = '新增'
  info.value.mode = 'new'
  info.value.link = link
}


//修改
function handleUpdate(rows: any) {
  if (selected.value.length != 1) {
    DialogAlert("必须选择一个")
    return
  }
  addDialog.value = true;
  const slected = selected.value[0]
  //将既定的命运交给需要之人
  dialogColumns.value.forEach((dialogColumn: any) => {
    dialogColumn.value = slected[dialogColumn.name]
  })
  info.value.title = '修改'
  info.value.mode = 'update'
  info.value.link = link
}

//修改标签
function handleUpdateTag(rows: any) {
  if (selected.value.length != 1) {
    DialogAlert("必须选择一个")
    return
  }
  tagDialog.value = true;
  tagCol.value = selected.value[0];
}

//删除
function handleDelete() {
  $q.dialog({
    title: '删除' + title,
    message: '你确定要删除' + selected.value.length + '条数据吗?',
    cancel: true
  }).onOk(() => {
    selected.value.forEach((item: any) => {
      api.post(link + '-delete', {
        'id': item.id
      }).then((res: any) => {
        if (res.code == '200') {
          CommonSuccess('操作成功')
          loadPage();
        }
      })
    })
    loadPage()
  })
}


</script>
