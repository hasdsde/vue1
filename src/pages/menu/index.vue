<template>
  <div class="q-pa-md">

    <!-- 顶部 -->
    <q-card class="col q-pa-md q-mb-md">
      <div class="col">
        <div class="row justify-between">
          <div>
            <q-btn color="primary" class="q-mr-md" label="刷新" icon="refresh" @click="loadPage" />
            <q-btn color="secondary" class="q-mr-md" label="新增" icon="add" @click="handelAdd" />
            <q-btn color="purple" class="q-mr-md" label="修改" icon="update" @click="handleUpdate" />
            <q-btn color="red" class="q-mr-md" label="删除" icon="delete" @click="handleDelete" />
          </div>
        </div>
      </div>
    </q-card>

    <!-- 表格 -->
    <div>
      <q-table title="Treats" :rows="rows" :columns="columns" row-key="id" v-model:selected="selected"
        :pagination="{ rowsPerPage: 0 }" selection="multiple">

        <!-- 顶部插槽 -->
        <template v-slot:top>
          <q-input dense filled label="名称" v-model="searchForm.name" class="inline-block q-mr-sm" />
          <q-input dense filled label="id" v-model="searchForm.id" class="inline-block q-mr-sm" />
          <q-btn flat color="primary" class="inline vertical-top  q-mr-sm" label="" icon="search" @click="loadPage" />
          <q-btn flat color="red" class="inline vertical-top q-mr-sm" label="" icon="restart_alt" @click="resetSearch" />
        </template>

        <!-- 分页插槽 -->
        <template v-slot:bottom>
          <span v-if="selected.length > 0">已选择{{ selected.length }}项</span>
          <q-space />
          <span class="q-mr-md">共{{ total }}条</span>
          <div>
            <span class="q-mr-md ">行数 {{ pageSize }}
              <q-btn-dropdown color="primary" flat label="" size="md" dense :ripple="false">
                <q-list>
                  <q-item clickable v-close-popup @click="updatePage(10)">
                    <q-item-section>
                      <q-item-label>10</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="updatePage(15)">
                    <q-item-section>
                      <q-item-label>15</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="updatePage(20)">
                    <q-item-section>
                      <q-item-label>20</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </span>
          </div>
          <q-pagination v-model="currentPage" :max="pageNumber" input @update:model-value="loadPage" />
        </template>
      </q-table>
    </div>

    <!-- 新增/修改 -->
    <q-dialog v-model="saveDialog" full-height position="right">
      <q-card class="column full-height max-w-[80vw] w-fit min-w-[300px]">
        <q-card-section>
          <div class="text-h6">{{ saveTitle }}</div>
        </q-card-section>


        <!-- <q-card-section class="q-pa-md" v-if="item.type == 'primary-key' && info.mode == 'update'">
          <q-input v-model="item.value" :label="item.label" readonly />
        </q-card-section> -->

        <!-- <q-card-section class="q-pa-md" v-if="item.type == 'input' && item.new">
          <q-input v-model="item.value" :label="item.label" />
        </q-card-section> -->

        <!--    提交按钮    -->
        <q-card-section class="text-primary">

          <div class="row justify-between">
            <div class="col">
              <!-- <q-btn color="primary" class="text-left" label="取消" v-close-popup @click="handleCancel" /> -->
              <q-btn flat color="red" label="重置" @click="save" />
            </div>
            <div class="col text-right">
              <q-btn color="primary" label="提交" v-close-popup @click="save" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import { BaseApi } from 'src/components/models'
import { CommonWarn, DialogConfirm } from 'src/components/dialog';

// 数据获取
let currentPage = ref(1)
let pageSize = ref(15)
let total = ref(10)
let pageNumber = ref(1)

const columns: any = [
  {
    name: 'id',
    required: true,
    label: 'id',
    align: 'left',
    field: 'id',
  },
  { name: 'name', align: 'center', label: '名称', field: 'name' },
  { name: 'icon', label: '图标', field: 'icon' },
  { name: 'url', label: '地址', field: 'url' },
  { name: 'parentId', label: '父级名称', field: 'parentId' },
  { name: 'authorityId', label: '权限id', field: 'authorityId' },
  { name: 'orders', label: '顺序', field: 'orders' },
  { name: 'createdAt', label: '创建时间', field: 'createdAt', align: 'center' },
  { name: 'updatedAt', label: '修改时间', field: 'updatedAt', align: 'center' },
  { name: 'deletedAt', label: '删除时间', field: 'deletedAt', align: 'right' },
]
const searchForm: any = ref({
  name: "",
  id: ""
})

let rows = ref([])
onMounted(() => {
  loadPage()
})
function loadPage() {
  api.get("/menu/page?currentPage=" + currentPage.value + "&pageSize=" + pageSize.value,).then((res: BaseApi) => {
    rows.value = res.data.records
    total.value = res.data.total
    pageNumber.value = Math.ceil(total.value / pageSize.value);
  })
}
function resetSearch() {
  for (const key in searchForm.value) {
    searchForm.value[key] = ""
  }
  loadPage()
}
function updatePage(size: number) {
  pageSize.value = size
  currentPage.value = 1
  loadPage()
}

// 删改查
let saveForm = ref({
  id: "",
  name: "",
  icon: "",
})

let saveDialog = ref(false)
let saveTitle = ref("")
const selected = ref([])
// 新增按钮
function handelAdd() {
  saveTitle.value = "新增"
  saveDialog.value = true
}

// 更新按钮
function handleUpdate() {
  const length = selected.value.length
  if (length != 1) {
    CommonWarn("只能选择一个")
    return
  }
  saveTitle.value = "修改"
  saveDialog.value = true
}

// 删除按钮
function handleDelete() {
  const length = selected.value.length
  if (length == 0) {
    CommonWarn("请选择至少一个")
    return
  }
  DialogConfirm("确定要删除" + length + "项吗？").onOk(() => {
    console.log()
  })
}
// Api
function save() {

}
</script>
