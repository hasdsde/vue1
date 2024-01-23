<template>
  <div class="q-pa-md">
    <q-card class="q-pa-md">
      <q-btn color="primary" label="刷新" icon="refresh" @click="loadPage" class="q-mr-md"></q-btn>
    </q-card>
    <q-card class="q-mt-md">
      <q-table :rows="rows" :columns="columns" hide-pagination="" v-model:selected="selected" selection="multiple"
               row-key="id" class="" :pagination="{rowsPerPage:0}">
        <template v-slot:top="prop">
          <q-input filled="" dense="" label="用户名" class="q-mr-md" v-model="searchForm.userName"></q-input>
          <q-input filled="" dense="" label="方法名" class="q-mr-md" v-model="searchForm.methodName"></q-input>
          <q-input filled="" dense="" label="权限名" class="q-mr-md" v-model="searchForm.authorityName"></q-input>
          <q-btn flat icon="search" color="primary" class="" @click="loadPage"></q-btn>
          <q-btn flat icon="restart_alt" color="red" @click="()=>{ResetForm(searchForm);loadPage();}"></q-btn>
        </template>
        <template v-slot:bottom="">
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
        <template v-slot:body-cell-info="props">
          <q-td class="max-w-[5vw]  truncate text-center">
            <span>
            {{ props.row.info }}
            </span>
            <q-tooltip>
              {{ props.row.info }}
            </q-tooltip>
          </q-td>
        </template>
      </q-table>

      <div class=""></div>
    </q-card>
  </div>

</template>
<script setup lang="ts">
import {ref} from "vue"
import {api} from "boot/axios";
import {ResetForm} from "components/utils";

const rows: any = ref([]);
const columns: any = [
  {
    "name": "userId",
    "align": "center",
    "required": true,
    "sortable": false,
    "label": "用户id",
    "field": "userId"
  },
  {
    "name": "userName",
    "align": "center",
    "required": true,
    "sortable": false,
    "label": "用户名",
    "field": "userName"
  },
  {
    "name": "methodName",
    "align": "center",
    "required": true,
    "sortable": false,
    "label": "方法名",
    "field": "methodName"
  },
  {
    "name": "authorityName",
    "align": "center",
    "required": true,
    "sortable": false,
    "label": "权限名",
    "field": "authorityName"
  },
  {
    "name": "info",
    "align": "center",
    "required": true,
    "sortable": false,
    "label": "详细信息",
    "field": "info"
  },
  {
    "name": "createdAt",
    "align": "center",
    "required": true,
    "sortable": false,
    "label": "创建时间",
    "field": "createdAt"
  },

];
const selected = ref([])
const page = ref({
  currentPage: 1,
  pageSize: 15,
  total: 1
});
const searchForm = ref({
  userName: "",
  methodName: "",
  authorityName: "",
})
loadPage()

function loadPage() {
  api.get("/log/page", {params: {...page.value, ...searchForm.value}}).then((res: any) => {
    rows.value = res.data.records
    page.value.total = res.data.total
  })
}


</script>