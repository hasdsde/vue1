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
          <q-input filled v-model="searchForm.nickName" dense label="显示名称" class="q-mr-md"></q-input>
          <q-select filled v-model="searchForm.deptId" dense label="部门" map-options emit-value clearable
                    :options="depts"
                    option-value="id" option-label="name" class="q-mr-md w-[200px]"></q-select>
          <q-btn flat icon="search" color="primary" class="" @click="loadPage"></q-btn>
          <q-btn flat icon="restart_alt" color="red" @click="()=>{ResetForm(searchForm);loadPage();}"></q-btn>
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
        <template v-slot:body-cell-sex="props">
          <q-td :props="props">
            <span v-if="props.row.sex==1">男</span>
            <span v-if="props.row.sex==2">女</span>
            <span v-if="props.row.sex==0">未知</span>
          </q-td>
        </template>
        <template v-slot:body-cell-roleId="props">
          <q-td :props="props">
            {{ getRoleNameById(props.row.roleId) }}
          </q-td>
        </template>
        <template v-slot:body-cell-deptId="props">
          <q-td :props="props">
            {{ getDeptNameById(props.row.deptId) }}
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
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.nickName" label="显示名称" placeholder="显示名称"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.userName" label="登录名" placeholder="登录名"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.avatar" label="头像" placeholder="头像"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.comment" label="备注" placeholder="备注"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.email" label="邮箱" placeholder="邮箱"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-select v-model="saveForm.roleId" label="角色" placeholder="角色" clearable emit-value map-options
                    option-value="id" option-label="name"
                    :options="roles"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-select v-model="saveForm.deptId" label="部门" placeholder="部门" clearable emit-value map-options
                    option-value="id" option-label="name"
                    :options="depts"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.phone" label="手机号" placeholder="手机号"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-select :options="[{label:'男',value:1},{label:'女',value:2},{label:'未知',value:0}]" v-model="saveForm.sex"
                    clearable label="性别" placeholder="性别" map-options emit-value/>
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
  </div>

</template>
<script setup lang="ts">
import {ref} from "vue"
import {GetHumanDate, ResetForm} from "components/utils"
import {api} from "boot/axios";
import {BaseApi} from "components/models";
import {CommonSuccess, CommonWarn, DialogConfirm} from "components/dialog";

const rows: any = ref([]);
const columns: any = [
  {"name": "userName", "align": "center", "required": true, "sortable": true, "label": "登录名", "field": "userName"},
  {"name": "nickName", "align": "center", "required": true, "sortable": true, "label": "显示名称", "field": "nickName"},
  {"name": "avatar", "align": "center", "required": true, "sortable": true, "label": "头像", "field": "avatar"},
  {"name": "email", "align": "center", "required": true, "sortable": true, "label": "邮箱", "field": "email"},
  {"name": "phone", "align": "center", "required": true, "sortable": true, "label": "手机号", "field": "phone"},
  {"name": "sex", "align": "center", "required": true, "sortable": true, "label": "性别", "field": "sex"},
  {"name": "deptId", "align": "center", "required": true, "sortable": true, "label": "部门", "field": "jobId"},
  {"name": "roleId", "align": "center", "required": true, "sortable": true, "label": "角色", "field": "roleId"},
  {"name": "comment", "align": "center", "required": true, "sortable": true, "label": "备注", "field": "comment"},
  {
    "name": "createdAt",
    "align": "center",
    "required": true,
    "sortable": true,
    "label": "创建时间",
    "field": "createdAt"
  },
  {
    "name": "updatedAt",
    "align": "center",
    "required": true,
    "sortable": true,
    "label": "更新时间",
    "field": "updatedAt"
  },
  {
    "name": "deletedAt",
    "align": "center",
    "required": true,
    "sortable": true,
    "label": "删除时间",
    "field": "deletedAt"
  },
];
const saveDialog: any = ref(false);
const selected: any = ref([]);
const saveForm: any = ref({
  "avatar": "",
  "comment": "",
  "roleId": "",
  "email": "",
  "deptId": "",
  "nickName": "",
  "password": "",
  "phone": "",
  "sex": "",
  "userName": ""
});
const dialogTitle = ref("新增");
const roles = ref([])
const depts = ref([])
const page = ref({
  currentPage: 1,
  pageSize: 15,
  total: 1
});
const searchForm = ref({
  nickName: "",
  deptId: "",
})

loadPage()

function loadPage() {
  api.get("/user/page", {params: {...page.value, ...searchForm.value},}).then((res: BaseApi) => {
    rows.value = res.data.records
    page.value.total = res.data.total
  })
  api.get("/role/all").then((res: BaseApi) => {
    roles.value = res.data
  })
  api.get("/dept/all").then((res: BaseApi) => {
    console.log(res.data)
    depts.value = res.data
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

function handleReset() {

}

function save() {
  api.post("/user/save", saveForm.value).then((res: BaseApi) => {
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
    api.delete("/user/sign", {data: numbers}).then((res: BaseApi) => {
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
    api.delete("/user/batch", {data: numbers}).then((res: BaseApi) => {
      if (res.data == 200) {
        CommonSuccess("")
      }
      loadPage()
    })
  })
}

function recover(id: number) {
  api.delete("/user/recover/" + id).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
    }
    loadPage()
  })
}

function getRoleNameById(id: number) {
  let name = "/"
  roles.value.forEach((item: any) => {
    if (id == item.id) {
      name = item.name;
    }
  })
  return name
}

function getDeptNameById(id: number) {
  let name = "/"
  depts.value.forEach((item: any) => {
    if (id == item.id) {
      name = item.name;
    }
  })
  return name
}
</script>