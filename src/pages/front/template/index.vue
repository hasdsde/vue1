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
      </q-table>

      <div class=""></div>
    </q-card>

    <q-dialog v-model="saveDialog" position="right" full-height="" class="">
      <q-card class="q-pa-sm min-w-[400px]">
        <q-card-section class="row items-center">
          <div class="text-h6">{{ dialogTitle }}</div>
          <q-space class=""></q-space>
          <q-btn icon="close" flat="" class=""></q-btn>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.description" label="描述" placeholder="描述">
          </q-input>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.name" label="名称" placeholder="名称">
          </q-input>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-select :options="[{label:'前端',value:1},{label:'后端',value:2}]" v-model="saveForm.type" clearable=""
                    label="类型" placeholder="类型">

          </q-select>
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
import {ResetForm} from "components/utils"

const rows: any = ref([
  {
    "avatar": "avatar0",
    "comment": "comment0",
    "createdAt": "createdAt0",
    "deletedAt": "deletedAt0",
    "email": "email0",
    "id": "id0",
    "jobId": "jobId0",
    "nickName": "nickName0",
    "password": "password0",
    "phone": "phone0",
    "sex": "sex0",
    "updatedAt": "updatedAt0",
    "userId": "userId0",
    "userName": "userName0"
  }, {
    "avatar": "avatar1",
    "comment": "comment1",
    "createdAt": "createdAt1",
    "deletedAt": "deletedAt1",
    "email": "email1",
    "id": "id1",
    "jobId": "jobId1",
    "nickName": "nickName1",
    "password": "password1",
    "phone": "phone1",
    "sex": "sex1",
    "updatedAt": "updatedAt1",
    "userId": "userId1",
    "userName": "userName1"
  }]);
const columns: any = [{
  "name": "avatar",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "头像",
  "field": "avatar"
}, {
  "name": "comment",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "备注",
  "field": "comment"
}, {
  "name": "createdAt",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "创建时间",
  "field": "createdAt"
}, {
  "name": "deletedAt",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "删除时间",
  "field": "deletedAt"
}, {
  "name": "email",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "邮箱",
  "field": "email"
}, {
  "name": "id",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "主键",
  "field": "id"
}, {
  "name": "jobId",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "岗位id",
  "field": "jobId"
}, {
  "name": "nickName",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "显示名称",
  "field": "nickName"
}, {
  "name": "password",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "密码",
  "field": "password"
}, {
  "name": "phone",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "手机号",
  "field": "phone"
}, {
  "name": "sex",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "性别 0-未知 1男 2女",
  "field": "sex"
}, {
  "name": "updatedAt",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "更新时间",
  "field": "updatedAt"
}, {
  "name": "userId",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "登录用id",
  "field": "userId"
}, {"name": "userName", "align": "center", "required": true, "sortable": true, "label": "登录名", "field": "userName"}];
const saveDialog: any = ref(false);
const selected: any = ref([]);
const saveForm: any = ref({
  "description": "",
  "id": "",
  "name": "",
  "type": "",
});
const dialogTitle = ref("新增");

const page = ref({
  currentPage: 1,
  pageSize: 15,
  total: 1
});

function loadPage() {

}

function handleUpdate() {

}

function handleNew() {
  saveDialog.value = true
}

function handleReset() {

}

function save() {

}

function handleDeleteSign() {

}

function handleDelete() {

}

</script>