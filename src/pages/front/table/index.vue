<template>
  <div class="q-pa-md">
    <q-card class="q-mb-md q-pa-md">
      <q-select filled dense class="inline w-[200px] q-pr-md  align-middle" v-model="currentTable" :options="allTables"
        label="选择对象" option-label="title" @update:model-value="handleTablesUpdate" />
      <q-btn color="primary" class="col q-mr-md" label="重新获取" icon="refresh" @click="loadPage" />
      <q-btn class="col q-mr-md" label="新建" color="secondary" icon="add" @click="building()" />
      <q-btn class="col q-mr-md" label="删除" color="red" icon="delete" @click="building()" />
      <q-btn class="col q-mr-md" label="下载" color="primary" icon="save" @click="building()" />
    </q-card>

    <q-card class="q-pa-md q-mt-md">
      <q-expansion-item switch-toggle-side default-opened label="Table表格" :header-style="{ fontSize: 'large' }"
        class="rounded-borders">
        <q-separator />
        <q-card>

          <q-card-section class="q-pb-none">
            <div class="row justify-center">
              <div class="col text-subtitle1" v-for="item in tableList">
                {{ item.label }}
                ({{ item.name }})
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row justify-between" v-for="(table, tableKey) in tableForm" :key="tableKey">
              <div class="col q-pr-sm " v-for="(item, itemKey) in tableList">
                <q-input filled v-if="item.type === 'string'" class="q-mt-md" dense
                  v-model="tableForm[tableKey][item.name]" />
                <q-select filled v-if="item.type === 'select'" :options="item.options" class="q-mt-md" dense
                  v-model="table[item.name]" />
                <q-toggle class="q-mt-md bg-grey-3 w-full text-center" v-if="item.type === 'boolean'"
                  v-model="table[item.name]" />
                <q-select class="q-mt-md" v-if="item.type === 'option'" dense filled v-model="table[item.name]" use-input
                  use-chips multiple hide-dropdown-icon input-debounce="0" new-value-mode="add-unique" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>

    <q-card class="q-pa-md q-mt-md">
      <q-expansion-item switch-toggle-side default-opened label="查询表单" :header-style="{ fontSize: 'large' }"
        class="rounded-borders">
        <q-separator />
        <q-card>

          <q-card-section class="q-pb-none">
            <div class="row justify-center">
              <div class="col text-subtitle1" v-for="item in queryList">
                {{ item.label }}
                ({{ item.name }})
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="row justify-between" v-for="(form, formKey) in queryForm" :key="formKey">
              <div class="col q-pr-sm " v-for="(item, itemKey) in queryList">
                <q-input filled class="q-mt-md" dense v-model="form[item.name]" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-card>

  </div>
</template>
<script setup lang="ts">
import { api } from 'src/boot/axios';
import { ref } from 'vue';
// TODO:可以导入数据然后做修改
// TODO:可以导出到WebSocket
// TODO:可以新增或删除行和列
// 来自Swagger的数据
const allTables: any = ref([])
const currentTable = ref([])


// 表格行
const tableForm: any = ref([])
const queryForm: any = ref([])
const addForm: any = ref([])
const updateForm: any = ref([])


loadPage()
function loadPage() {
  api.get('/v2/api-docs').then((res: any) => {
    for (const key in res.definitions) {
      allTables.value.push(res.definitions[key])
    }
    // 默认选择第一个
    if (currentTable.value.length == 0) {
      currentTable.value = allTables.value[0]
      handleTablesUpdate(allTables.value[0])
    }
  })
}

// 在选择的对象改变时，修改数据
function handleTablesUpdate(table: any) {
  // 传输表格数据
  tableForm.value = []
  addForm.value = []
  queryForm.value = []
  updateForm.value = []
  for (const key in table.properties) {
    tableForm.value.push({
      name: key,
      type: 'string',
      align: 'center',
      required: true,
      sortable: true,
      label: table.properties[key].description,
      field: key,
      option: []
    })
    addForm.value.push({
      name: key,
      label: table.properties[key].description,
      type: "string",
      placeholder: table.properties[key].description,
      rules: "",
      readonly: false,
      disable: false,
      clearable: false,
      option: ""
    })
  }
  queryForm.value.push(
    { name: "id", default: "" },
    { name: "name", default: "" },
    { name: "currentPage", default: "1" },
    { name: "pageSize", default: "10" },
  )
  console.log(tableForm.value);
}
function building() { }


// 表格列
const tableList = ref([
  { label: '唯一标识', name: 'name', type: 'string' },
  { label: '对齐', name: 'align', type: 'select', options: ['left', 'right', 'center'] },
  { label: '列可见性', name: 'required', type: 'boolean' },
  { label: '排序开关', name: 'sortable', type: 'boolean' },
  { label: '显示名称', name: 'label', type: 'string' },
  { label: '数据名称', name: 'field', type: 'string' },

])
const queryList = ref([
  { label: '名称', name: "name" },
  { label: '默认值', name: "default" }
])
const addList = ref([
  { label: '唯一标识', name: 'name', type: 'string' },
  { label: '名称', name: 'label', type: 'string' },
  { label: '表单类型', name: 'type', type: 'string', option: ['string', 'number', 'boolean', 'time'] },
  { label: '提示', name: 'placeholder', type: 'string' },
  { label: '规则', name: 'rules', type: 'string' },
  { label: '只读', name: 'readonly', type: 'boolean' },
  { label: '不可用', name: 'disable', type: 'boolean' },
  { label: '带删除按钮', name: 'clearable', type: 'boolean' },
  { label: '选项内容(如果是select)', name: 'option', type: 'option' },
])
</script>
