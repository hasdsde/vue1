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
               :pagination="{rowsPerPage:0}"
               :visible-columns="visibleColumns"
               row-key="id" class="">
        <template v-slot:top="prop">
          <q-input filled="" dense="" label="品牌名" class="q-mr-md" v-model="queryForm.name"></q-input>
          <q-btn flat="" icon="search" color="primary" class="" @click="loadPage"></q-btn>
          <q-btn flat icon="restart_alt" color="red" @click="()=>{ResetForm(queryForm);loadPage();}"></q-btn>
          <q-space></q-space>
          <q-select
              v-model="visibleColumns"
              multiple
              outlined
              dense
              options-dense
              display-value="详细信息"
              emit-value
              map-options
              :options="columns"
              option-value="name"
              options-cover
              style="min-width: 150px"
          />
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
        <template v-slot:body-cell-sortId="props">
          <q-td :props="props">
            {{ getSortName(props.row.sortId) }}
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
          <q-input v-model="saveForm.name" label="品牌名" placeholder="品牌名"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.userId" label="用户id" placeholder="用户id"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.advantage" label="优势" placeholder="优势"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-select v-model="saveForm.sortId" :options="sorts" map-options emit-value label="分类id"
                    option-value="id" option-label="name" clearable
                    placeholder="分类id"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.avatarUrl" label="头图" placeholder="头图"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.bodyUrl" label="主题图片" placeholder="主题图片"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.claimCheck" label="审核" placeholder="审核"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.claimMoney" label="需求金额" placeholder="需求金额"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.claimShop" label="门店数" placeholder="门店数"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.claimStaff" label="员工要求" placeholder="员工要求"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.companyAddress" label="公司地址" placeholder="公司地址"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.companyName" label="公司名" placeholder="公司名"/>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.mode" label="经营模式" placeholder="经营模式"/>
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

const baseUrl = "/brand"
const rows: any = ref([]);
const saveDialog: any = ref(false);
const selected: any = ref([]);
const columns: any = [{
  "name": "name",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "品牌名",
  "field": "name"
}, {
  "name": "sortId",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "分类id",
  "field": "sortId"
}, {
  "name": "userId",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "用户id",
  "field": "userId"
}, {
  "name": "avatarUrl",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "头图",
  "field": "avatarUrl"
}, {
  "name": "companyName",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "公司名",
  "field": "companyName"
}, {
  "name": "mode",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "经营模式",
  "field": "mode"
}, {
  "name": "flow",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "流程",
  "field": "flow"
}, {
  "name": "advantage",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "优势",
  "field": "advantage"
}, {
  "name": "bodyUrl",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "主题图片",
  "field": "bodyUrl"
}, {
  "name": "claimCheck",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "审核",
  "field": "claimCheck"
}, {
  "name": "claimMoney",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "需求金额",
  "field": "claimMoney"
}, {
  "name": "claimShop",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "门店数",
  "field": "claimShop"
}, {
  "name": "claimStaff",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "员工要求",
  "field": "claimStaff"
}, {
  "name": "companyAddress",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "公司地址",
  "field": "companyAddress"
}, {
  "name": "createdAt",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "createdAt",
  "field": "createdAt"
}, {
  "name": "deletedAt",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "deletedAt",
  "field": "deletedAt"
}, {
  "name": "updatedAt",
  "align": "center",
  "required": false,
  "sortable": false,
  "label": "updatedAt",
  "field": "updatedAt"
}];
const saveForm: any = ref({
  "id": "",
  "userId": "",
  "advantage": "",
  "sortId": "",
  "name": "",
  "avatarUrl": "",
  "bodyUrl": "",
  "claimCheck": "",
  "claimMoney": "",
  "claimShop": "",
  "claimStaff": "",
  "companyAddress": "",
  "companyName": "",
  "flow": "",
  "mode": ""
});
const dialogTitle = ref("新增");
const page = ref({
  currentPage: 1,
  pageSize: 15,
  total: 1
});
const queryForm: any = ref({
  "name": "",
});
const visibleColumns = ref(['name', 'sortId', 'userId', 'avatarUrl', 'companyName', 'mode', 'createdAt', 'updatedAt', 'deletedAt'])
const sorts: any = ref([])
onMounted(() => {
  loadPage()
})

function loadPage() {
  api.get(baseUrl + "/page", {params: {...page.value, ...queryForm.value}}).then((res: BaseApi) => {
    rows.value = res.data.records
    page.value.total = res.data.total
  })
  loadSort()
}

function loadSort() {
  api.get("/sort/all").then((res: BaseApi) => {
    sorts.value = res.data
  })
}

function getSortName(id: number) {
  let sortName = ""
  sorts.value.forEach((sort: any) => {
    if (sort.id == id) {
      sortName = sort.name
    }
  })
  return sortName
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

function recover(id: number) {
  api.delete(baseUrl + "/recover/" + id).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
    }
    loadPage()
  })
}
</script>