<template>
  <div class="q-pa-md">
    <q-card class="q-pa-md">
      <q-btn color="primary" label="刷新" icon="refresh" @click="loadPage" class="q-mr-md"></q-btn>
      <q-btn color="secondary" label="新增" icon="add" @click="handleNew" class="q-mr-md"></q-btn>
      <q-btn color="purple" label="修改" icon="update" @click="handleUpdate" class="q-mr-md"></q-btn>
      <q-btn color="purple" label="标记删除" icon="delete" @click="handleDeleteSign" class="q-mr-md"></q-btn>
      <q-btn color="red" label="删除" icon="delete" @click="handleDelete" class="q-mr-md"></q-btn>
    </q-card>
    <q-card class="q-mt-md">
      <q-table :rows="rows" :columns="columns" hide-pagination="" v-model:selected="selected" selection="multiple"
               row-key="id" class="">
        <template v-slot:top="prop">
          <q-input filled="" dense="" label="搜索内容" class="q-mr-md"></q-input>
          <q-btn flat="" icon="search" color="primary" class=""></q-btn>
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
        <template v-slot:body-cell-handle="props">
          <q-td :props="props">
            <q-btn label="查看/分配权限" flat color="primary" class="q-mr-md"
                   @click="handleUpdateAuthority(props.row.id)"/>
            <q-btn label="查看/分配菜单" flat color="primary" @click="handleUpdateMenu(props.row.id)"/>
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
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.name" label="名称" placeholder="名称"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.description" label="描述" placeholder="描述"/>
        </q-card-section>
        <q-card-section class="text-primary">
          <div class="row justify-between">
            <div class="col">
              <!-- <q-btn color="primary" class="text-left" label="取消" v-close-popup @click="handleCancel" /> -->
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
    <q-dialog v-model="authorityDialog" position="right" full-height>
      <q-card class="min-w-[400px]">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ dialogTitle }}</div>
          <q-space class=""></q-space>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item tag="label" v-ripple v-for="authority in allAuthorities">
              <q-item-section avatar>
                <q-checkbox v-model="currentAuthorities" :val="authority.id" color="teal"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ authority.name }}</q-item-label>
                <q-item-label class="text-grey">{{ authority.description }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section class="text-primary">
          <div class="row justify-between">
            <div class="col">
              <!-- <q-btn color="primary" class="text-left" label="取消" v-close-popup @click="handleCancel" /> -->
              <q-btn flat="" color="red" label="重置" @click="ResetForm(authorityForm)">
              </q-btn>
            </div>
            <div class="col text-right">
              <q-btn color="primary" label="提交" v-close-popup="" @click="updateAuthority">
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="menuDialog" position="right" full-height>
      <q-card class="min-w-[400px]">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ dialogTitle }}</div>
          <q-space class=""></q-space>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item tag="label" v-ripple v-for="menu in allMenus">
              <q-item-section avatar>
                <q-checkbox v-model="currentMenus" :val="menu.id" color="teal"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ menu.name }}</q-item-label>
                <q-item-label class="text-grey">{{ menu.url }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-section class="text-primary">
          <div class="row justify-between">
            <div class="col">
              <!-- <q-btn color="primary" class="text-left" label="取消" v-close-popup @click="handleCancel" /> -->
              <q-btn flat="" color="red" label="重置" @click="ResetForm(menuForm)">
              </q-btn>
            </div>
            <div class="col text-right">
              <q-btn color="primary" label="提交" v-close-popup="" @click="updateMenu">
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>

</template>
<script setup lang="ts">
import {ref} from "vue"
import {GetHumanDate, ResetForm} from "components/utils"
import {api} from "boot/axios";
import {BaseApi} from "components/models";
import {CommonSuccess, CommonWarn, DialogConfirm} from "components/dialog";

const rows: any = ref([]);
const columns: any = [{
  "name": "name",
  "align": "left",
  "required": true,
  "sortable": true,
  "label": "名称",
  "field": "name"
}, {
  "name": "description",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "描述",
  "field": "description"
}, {
  "name": "createdAt",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "创建时间",
  "field": "createdAt"
}, {
  "name": "updatedAt",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "更新时间",
  "field": "updatedAt"
}, {
  "name": "deletedAt",
  "align": "right",
  "required": true,
  "sortable": true,
  "label": "删除时间",
  "field": "deletedAt"
}, {"name": "handle", "align": "center", "required": true, "sortable": true, "label": "操作", "field": "handle"}];
const saveDialog: any = ref(false);
const selected: any = ref([]);
const saveForm: any = ref({"description": "", "id": "", "name": ""});
const allMenus = ref([])
const allAuthorities = ref([])

const menuForm = ref([])
const authorityForm = ref({})
const currentAuthorities = ref([])
const currentMenus = ref([])
const authorityDialog = ref(false)
const menuDialog = ref(false)
const currentId = ref()

const dialogTitle = ref("新增");
const page = ref({
  currentPage: 1,
  pageSize: 15,
  total: 1
});
loadPage()
loadData()

function loadPage() {
  api.get("/role/page", {params: page.value}).then((res: BaseApi) => {
    rows.value = res.data.records
    page.value.total = res.data.total
  })

}

function loadData() {
  api.get("/authority/all").then((res: BaseApi) => {
    allAuthorities.value = res.data
  })
  api.get("/menu/all").then((res: BaseApi) => {
    allMenus.value = res.data
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

// 分配菜单
function handleUpdateMenu(id: number) {
  dialogTitle.value = "更新菜单"
  menuDialog.value = true
  currentId.value = id
  api.get("/roleMenu/" + id).then((res: BaseApi) => {
    currentMenus.value = res.data
  })
}

// 分配权限
function handleUpdateAuthority(id: number) {
  dialogTitle.value = "更新权限"
  authorityDialog.value = true
  currentId.value = id
  api.get("/roleAuthority/" + id).then((res: BaseApi) => {
    currentAuthorities.value = res.data
  })
}

function updateAuthority() {
  api.post("/roleAuthority/" + currentId.value, currentAuthorities.value).then((res: BaseApi) => {
    CommonSuccess(null)
  })
}

function updateMenu(id: number) {
  api.post("/roleMenu/" + currentId.value, currentMenus.value).then((res: BaseApi) => {
    CommonSuccess(null)
  })
}

function save() {
  api.post("/role/save", saveForm.value).then((res: BaseApi) => {
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
    api.delete("/role/sign", {data: numbers}).then((res: BaseApi) => {
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
    api.delete("/role/batch", {data: numbers}).then((res: BaseApi) => {
      if (res.data == 200) {
        CommonSuccess("")
      }
      loadPage()
    })
  })
}

function recover(id: number) {
  api.delete("/role/recover/" + id).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
    }
    loadPage()
  })
}

</script>