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
      <q-table title="Treats" :rows="rows" :columns="columns" row-key="id">
        <template v-slot:top>
          <q-input dense filled label="名称" v-model="searchForm.name" class="inline-block q-mr-sm" />
          <q-input dense filled label="id" v-model="searchForm.id" class="inline-block q-mr-sm" />
          <q-btn flat color="primary" class="inline vertical-top  q-mr-sm" label="" icon="search" @click="loadPage" />
          <q-btn flat color="red" class="inline vertical-top q-mr-sm" label="" icon="restart_alt" @click="resetSearch" />
        </template>
      </q-table>
    </div>

    <!-- 新增/修改 -->
    <q-dialog v-model="saveDialog" full-height position="right">
      <q-card class="column full-height max-w-[80vw] w-fit">
        <q-card-section>
          <div class="text-h6">Full Height</div>
        </q-card-section>

        <q-card-section class="col q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import { BaseApi } from 'src/components/models'

// 数据获取
const columns = [
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
  name: "aaa",
  id: "bbb"
})
let rows = ref([])
onMounted(() => {
  loadPage()
})
function loadPage() {
  api.get("/menu/page?currentPage=1&pageSize=10").then((res: BaseApi) => {
    rows.value = res.data.records
    console.log(res.data.records);
  })
}
function resetSearch() {
  for (const key in searchForm.value) {
    searchForm.value[key] = ""
  }
  loadPage
}

// 删改查

let saveDialog = ref(false)
let saveTitle = ref("")
function handelAdd() {
  saveTitle.value = "新增"
  saveDialog.value = true
}
function handleUpdate() {
  saveTitle.value = "新增"
  saveDialog.value = true
}
function handleDelete() {

}
</script>
