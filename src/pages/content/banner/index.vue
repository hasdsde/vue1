<template>
  <div class="q-pa-md">
    <q-card class="q-pa-md">
      <q-btn color="primary" label="刷新" icon="refresh" @click="loadPage" class="q-mr-md"></q-btn>
      <q-btn color="secondary" label="新增" icon="add" @click="handleNew" class="q-mr-md"></q-btn>
      <q-btn color="purple" label="修改" icon="update" @click="handleUpdate" class="q-mr-md"></q-btn>
      <q-btn color="red" label="删除" icon="delete" @click="handleDelete" class="q-mr-md"></q-btn>
    </q-card>
    <q-card class="q-mt-md">
      <q-table :rows="rows" :columns="columns" hide-pagination="" v-model:selected="selected" selection="multiple"
               :pagination="{rowsPerPage:0}"
               row-key="id" class="">
        <template v-slot:top="prop">
        </template>
        <template v-slot:bottom="">
          <span v-if="selected.length > 0">已选择{{ selected.length }}项</span>
          <q-space></q-space>
          <span class="q-mr-md">共{{ page.total }}条</span>
          <div>
            <span class="q-mr-md ">行数 {{ page.pageSize }}
              <q-btn-dropdown color="primary" flat="" label="" size="md" dense="" :ripple="false">
                <q-list>
                  <q-item clickable="" v-close-popup="" @click="()=>{page.pageSize=10;}">
                    <q-item-section>
                      <q-item-label>10</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable="" v-close-popup="" @click="()=>{page.pageSize=15;}">
                    <q-item-section>
                      <q-item-label>15</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable="" v-close-popup="" @click="()=>{page.pageSize=20;}">
                    <q-item-section>
                      <q-item-label>20</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </span>
          </div>
          <q-pagination v-model="page.currentPage" :max="Math.ceil(page.total/page.pageSize)" input=""
                        @update:model-value="loadPage">
          </q-pagination>
        </template>

        <template v-slot:body-cell-parentId="props">
          <q-td :props="props">
            {{ getParentById(props.row.parentId) }}
          </q-td>
        </template>

        <template v-slot:body-cell-icon="props">
          <q-td :props="props">
            <span v-if="props.row.icon==null">/</span>
            <span v-else>
              <q-btn flat round color="primary" :icon="props.row.icon"/>
            </span>
          </q-td>
        </template>

        <template v-slot:body-cell-updatedAt="props">
          <q-td :props="props">
            {{ GetHumanDate(props.row.updatedAt) }}
          </q-td>
        </template>

        <template v-slot:body-cell-createdAt="props">
          <q-td :props="props">
            {{ GetHumanDate(props.row.createdAt) }}
          </q-td>
        </template>

        <template v-slot:body-cell-deletedAt="props">
          <q-td :props="props">
            {{ GetHumanDate(props.row.deletedAt) }}
            <q-btn v-if="props.row.deletedAt != null" flat size="md" style="color: #FF0080" label="恢复"
                   @click="recover(props.row.id)"/>
          </q-td>
        </template>
      </q-table>

      <div class=""></div>
    </q-card>

    <q-dialog v-model="saveDialog" position="right" full-height="" class="">
      <q-card class="q-pa-sm min-w-[400px]">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ dialogTitle }}</div>
          <q-space class=""></q-space>
          <q-btn icon="close"/>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.url" label="图片src" placeholder="url"/>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.link" label="跳转链接" placeholder="链接"/>
        </q-card-section>

        <q-card-section class="text-primary">
          <div class="row justify-between">
            <div class="col">
              <q-btn flat="" color="red" label="重置" @click="ResetForm(saveForm)">
              </q-btn>
            </div>
            <div class="col text-right">
              <q-btn color="primary" label="提交" v-close-popup="" @click="save">
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

</template>
<script setup lang="ts">
import {onMounted, ref} from "vue"
import {GetHumanDate, ResetForm} from "components/utils"
import {api} from "boot/axios";
import {BaseApi} from "components/models";
import {CommonSuccess, CommonWarn, DialogConfirm} from "components/dialog";

const baseUrl = "/banner"
const columns: any = [{
  "name": "url",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "图片src",
  "field": "url"
}, {
  "name": "link",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "跳转链接",
  "field": "link"
}, {
  "name": "createdAt",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "创建时间",
  "field": "createdAt"
}];

const rows: any = ref([]);
const saveDialog: any = ref(false);
const selected: any = ref([]);
const saveForm: any = ref({"link": "", "url": ""});
const dialogTitle = ref("新增");
const page = ref({
  currentPage: 1,
  pageSize: 15,
  total: 1
});
const parentSort = ref([])
const queryForm: any = ref();

onMounted(() => {
  loadPage()
})

function loadPage() {
  api.get(baseUrl + "/page", {params: {...page.value, ...queryForm.value}}).then((res: BaseApi) => {
    rows.value = res.data.records
    page.value.total = res.data.total
  })
}

function handleUpdate() {
  const length = selected.value.length
  const form: any = selected.value[0]

  if (length != 1) {
    CommonWarn("只能选择一个")
    return
  }
  saveForm.value = {...saveForm.value, ...form}
  dialogTitle.value = "修改"
  saveDialog.value = true
}

function handleNew() {
  ResetForm(saveForm.value)
  dialogTitle.value = "新增"
  saveDialog.value = true
}


function save() {
  api.post(baseUrl, saveForm.value).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
    }
    loadPage()
  })
}

function handleDeleteSign() {
  const length = selected.value.length
  if (length == 0) {
    CommonWarn("请选择至少一个")
    return
  }
  DialogConfirm("确定要删除" + length + "项吗？").onOk(() => {
    const numbers = selected.value.map((item: any) => {
      return item.id
    })
    api.delete(baseUrl + "/del/sign", {data: numbers}).then((res: BaseApi) => {
      if (res.data == 200) {
        CommonSuccess("操作成功")
      }
      loadPage()
    })
  })
}

function handleDelete() {
  const length = selected.value.length
  if (length == 0) {
    CommonWarn("请选择至少一个")
    return
  }
  DialogConfirm("确定要删除" + length + "项吗？").onOk(() => {
    const numbers = selected.value.map((item: any) => {
      return item.id
    })
    api.delete(baseUrl + "/del/batch", {data: numbers}).then((res: BaseApi) => {
      if (res.data == 200) {
        CommonSuccess("")
      }
      loadPage()
    })
  })
}

function getParentById(id: number) {
  let name = "/"
  parentSort.value.forEach((item: any) => {
    if (id == item.id) {
      name = item.name
    }
  })
  return name
}

function recover(id: number) {
  api.delete(baseUrl + "/recover/" + id).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
    }
    loadPage()
  })
}
</script>