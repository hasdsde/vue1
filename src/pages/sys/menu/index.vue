<template>
  <div class="q-pa-md">

    <!-- 顶部 -->
    <q-card class="col q-pa-md q-mb-md">
      <div class="col">
        <div class="row justify-between">
          <div>
            <q-btn color="primary" class="q-mr-md" label="刷新" icon="refresh" @click="loadPage"/>
            <q-btn color="secondary" class="q-mr-md" label="新增" icon="add" @click="handelAdd"/>
            <q-btn color="purple" class="q-mr-md" label="修改" icon="update" @click="handleUpdate"/>
            <q-btn color="purple" class="q-mr-md" label="标记删除" icon="delete" @click="handleSignDelete"/>
            <q-btn color="red" class="q-mr-md" label="删除" icon="delete" @click="handleDelete"/>
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
          <q-input dense filled label="名称" v-model="searchForm.name" class="inline-block q-mr-sm"/>
          <q-select dense filled label="父级" clearable v-model="searchForm.parentId" :options="parentMenus"
                    class="inline-block q-mr-sm w-[200px]" option-value="id" option-label="name" map-options
                    emit-value/>
          <q-btn flat color="primary" class="inline vertical-top  q-mr-sm" label="" icon="search" @click="loadPage"/>
          <q-btn flat color="red" class="inline vertical-top q-mr-sm" label="" icon="restart_alt" @click="resetSearch"/>
        </template>

        <!-- 分页插槽 -->
        <template v-slot:bottom>
          <span v-if="selected.length > 0">已选择{{ selected.length }}项</span>
          <q-space/>
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
          <q-pagination v-model="currentPage" :max="pageNumber" input @update:model-value="loadPage"/>
        </template>

        <!-- 列插槽 -->

        <template v-slot:body-cell-icon="props">
          <q-td :props="props">
            <q-btn flat round color="primary" :icon="props.row.icon"/>
          </q-td>
        </template>

        <template v-slot:body-cell-parentId="props">
          <q-td :props="props">
            {{ getParentName(props.row.parentId) }}
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
            <div v-if="props.row.deletedAt != null">
              {{ GetHumanDate(props.row.deletedAt) }}
              <q-btn flat size="md" style="color: #FF0080" label="恢复" @click="handleRecover(props.row.id)"/>
            </div>
          </q-td>
        </template>
      </q-table>
    </div>

    <!-- 新增/修改 -->
    <q-dialog v-model="saveDialog" full-height position="right">
      <q-card class="column full-height max-w-[80vw] w-fit min-w-[400px] q-pa-sm">
        <q-card-section>
          <div class="text-h6">{{ saveTitle }}</div>
        </q-card-section>

        <!-- <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.id" label="Id" readonly />
        </q-card-section> -->

        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.name" label="名称"/>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.icon" label="图标"/>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.url" label="地址"/>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-select label="父级" clearable v-model="saveForm.parentId" :options="parentMenus" option-value="id"
                    option-label="name" map-options emit-value/>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.authorityId" label="权限ID"/>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-input type="number" v-model="saveForm.orders" label="顺序"/>
        </q-card-section>
        <!--    提交按钮    -->
        <q-card-section class="text-primary">

          <div class="row justify-between">
            <div class="col">
              <!-- <q-btn color="primary" class="text-left" label="取消" v-close-popup @click="handleCancel" /> -->
              <q-btn flat color="red" label="重置" @click="save"/>
            </div>
            <div class="col text-right">
              <q-btn color="primary" label="提交" v-close-popup @click="save"/>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts" setup>
import {api} from 'src/boot/axios';
import {onMounted, ref} from 'vue';
import {BaseApi} from 'src/components/models'
import {CommonSuccess, CommonWarn, DialogConfirm} from 'src/components/dialog';
import {GetHumanDate, ResetForm} from 'src/components/utils';

// 数据获取
let currentPage = ref(1)
let pageSize = ref(15)
let total = ref(10)
let pageNumber = ref(1)

const columns: any[] = [
  {name: 'name', align: 'center', label: '名称', field: 'name'},
  {name: 'icon', label: '图标', field: 'icon', align: 'center'},
  {name: 'url', label: '地址', field: 'url', align: 'center'},
  {name: 'parentId', label: '父级名称', field: 'parentId', align: 'center'},
  {name: 'authorityId', label: '权限id', field: 'authorityId', align: 'center'},
  {name: 'orders', label: '顺序', field: 'orders'},
  {name: 'createdAt', label: '创建时间', field: 'createdAt', align: 'center'},
  {name: 'updatedAt', label: '修改时间', field: 'updatedAt', align: 'center'},
  {name: 'deletedAt', label: '删除时间', field: 'deletedAt', align: 'right'},
]
const parentMenus = ref([])
const searchForm: any = ref({
  name: "",
  parentId: "",
})

let rows = ref([])
onMounted(() => {
  loadPage()
})

function loadPage() {
  ResetForm(saveForm.value)
  api.get("/menu/page?currentPage=" + currentPage.value + "&pageSize=" + pageSize.value, {params: searchForm.value}).then((res: BaseApi) => {
    rows.value = res.data.records
    total.value = res.data.total
    pageNumber.value = Math.ceil(total.value / pageSize.value);
  })
  loadParent()
}

function loadParent() {
  api.get("/menu/parent").then((res: BaseApi) => {
    parentMenus.value = res.data
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

// 数据展示
function getParentName(parendId: number) {
  let menuName = "/"
  parentMenus.value.forEach((menu: any) => {
    if (parendId == menu.id) {
      menuName = menu.name
    }
  })
  return menuName
}

// 数据操作
let saveForm = ref({
  name: "",
  id: "",
  icon: "",
  url: "",
  parentId: "",
  authorityId: "",
  orders: ""
})

let saveDialog = ref(false)
let saveTitle = ref("")
const selected = ref([])

// 新增按钮
function handelAdd() {
  ResetForm(saveForm.value)
  saveTitle.value = "新增"
  saveDialog.value = true
}

// 更新按钮
function handleUpdate() {
  const length = selected.value.length
  const form: any = selected.value[0]

  if (length != 1) {
    CommonWarn("只能选择一个")
    return
  }
  saveForm.value = {...saveForm.value, ...form}
  console.log(saveForm.value);
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
    const numbers = selected.value.map((item: any) => {
      return item.id
    })
    api.delete("/menu/del/batch", {data: numbers}).then((res: BaseApi) => {
      if (res.data == 200) {
        CommonSuccess("")
      }
      loadPage()
    })
  })
}

function handleRecover(id: number) {
  api.put("/menu/recover/" + id).then((res: BaseApi) => {
    if (res.data == 200) {
      CommonSuccess("")
    }
    loadPage()
  })
}

// 标记删除
function handleSignDelete() {
  const length = selected.value.length
  if (length == 0) {
    CommonWarn("请选择至少一个")
    return
  }
  DialogConfirm("确定要删除" + length + "项吗？").onOk(() => {
    const numbers = selected.value.map((item: any) => {
      return item.id
    })
    api.delete("/menu/del/sign", {data: numbers}).then((res: BaseApi) => {
      if (res.data == 200) {
        CommonSuccess("")
      }
      loadPage()
    })
  })
}

// Api
function save() {
  api.post("/menu", saveForm.value).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
    }
    loadPage()
  })
}
</script>
