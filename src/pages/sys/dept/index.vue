<template>
  <div class="q-pa-md">
    <q-card class="q-pa-md">
      <q-btn color="primary" label="刷新" icon="refresh" class="q-mr-md" @click="loadPage"></q-btn>
      <q-btn color="secondary" label="新增" icon="add" class="q-mr-md" @click="handelNew"></q-btn>
      <q-btn color="purple" label="修改" icon="update" class="q-mr-md" @click="handleUpdate"></q-btn>
      <q-btn color="purple" class="q-mr-md" label="标记删除" icon="delete" @click="deleteSign"></q-btn>
      <q-btn color="red" label="删除" icon="delete" class="q-mr-md" @click="deletes"></q-btn>
    </q-card>
    <q-card class="q-mt-md">
      <q-table :rows="rows" :columns="columns" hide-pagination v-model:selected="selected" selection="multiple"
               :pagination="{rowsPerPage:0}"
               row-key="id" class="">
        <template v-slot:top="prop">
          <q-input filled dense label="搜索内容" class="q-mr-md"></q-input>
          <q-btn flat icon="search" color="primary" class></q-btn>
          <q-btn flat icon="restart_alt" color="red" class></q-btn>
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

        <template v-slot:body-cell-parentId="props">
          <q-td :props="props">
            {{ getNameById(props.row.parentId) }}
          </q-td>
        </template>

        <template v-slot:body-cell-deletedAt="props">
          <q-td :props="props">
            <div v-if="props.row.deletedAt != null">
              {{ GetHumanDate(props.row.deletedAt) }}
              <q-btn flat size="md" style="color: #FF0080" label="恢复" @click="recover(props.row.id)"/>
            </div>
          </q-td>
        </template>
        <template v-slot:bottom>
          <span v-if="selected.length > 0">已选择{{ selected.length }}项</span>
          <q-space/>
          <span class="q-mr-md">共{{ page.total }}条</span>
          <div>
            <span class="q-mr-md ">行数 {{ page.pageSize }}
              <q-btn-dropdown color="primary" flat label="" size="md" dense :ripple="false">
                <q-list>
                  <q-item clickable v-close-popup @click="()=>{page.pageSize=10;}">
                    <q-item-section>
                      <q-item-label>10</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="()=>{page.pageSize=15;}">
                    <q-item-section>
                      <q-item-label>15</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="()=>{page.pageSize=20;}">
                    <q-item-section>
                      <q-item-label>20</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </span>
          </div>
          <q-pagination v-model="page.currentPage" :max="Math.ceil(page.total/page.pageSize)" input
                        @update:model-value="loadPage"/>
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
          <q-input v-model="saveForm.name" label="名称" placeholder="名称">
          </q-input>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="saveForm.description" label="描述" placeholder="description">
          </q-input>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-select v-model="saveForm.parentId" label="父级id" :options="allDept" emit-value clearable map-options
                    option-label="name" option-value="id"
                    placeholder="父级id">
          </q-select>
        </q-card-section>
        <q-card-section class="text-primary">
          <div class="row justify-between">
            <div class="col">
              <!-- <q-btn color="primary" class="text-left" label="取消" v-close-popup @click="handleCancel" /> -->
              <q-btn flat color="red" label="重置" @click="ResetForm(saveForm)"/>
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
<script setup lang="ts">
import {ref} from "vue"
import {api} from "boot/axios";
import {BaseApi} from "components/models";
import {GetHumanDate, ResetForm} from "components/utils";
import {CommonSuccess, CommonWarn, DialogConfirm} from "components/dialog";

const rows: any = ref([]);
const columns: any = [
  {"name": "id", "align": "left", "required": true, "sortable": true, "label": "id", "field": "id"},
  {
    "name": "name",
    "align": "center",
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
  },
  {
    "name": "parentId",
    "align": "center",
    "required": true,
    "sortable": true,
    "label": "父级",
    "field": "parentId"
  }, {
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
  }, {
    "name": "deletedAt",
    "align": "center",
    "required": true,
    "sortable": true,
    "label": "删除时间",
    "field": "deletedAt"
  },
];
const saveDialog: any = ref(false);
const dialogTitle = ref("新增");
const selected: any = ref([]);
const page = ref({
  currentPage: 1,
  pageSize: 15,
  total: 1
});
const saveForm: any = ref({
  "description": "",
  "id": "",
  "name": "",
  "parentId": "",
});
loadPage()

const allDept = ref([])

function loadPage() {
  api.get("/dept/page", {params: page.value}).then((res: BaseApi) => {
    rows.value = res.data.records
    page.value.total = res.data.total
  })
  api.get("/dept/all").then((res: BaseApi) => {
    allDept.value = res.data
  })
}

// 新增按钮
function handelNew() {
  ResetForm(saveForm.value)
  dialogTitle.value = "新增"
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
  dialogTitle.value = "修改"
  saveDialog.value = true
}

function deletes() {
  const length = selected.value.length
  if (length == 0) {
    CommonWarn("请选择至少一个")
    return
  }
  DialogConfirm("确定要删除" + length + "项吗？").onOk(() => {
    const numbers = selected.value.map((item: any) => {
      return item.id
    })
    api.delete("/dept/batch", {data: numbers}).then((res: BaseApi) => {
      if (res.data == 200) {
        CommonSuccess("")
      }
      loadPage()
    })
  })
}

function deleteSign() {
  const length = selected.value.length
  if (length == 0) {
    CommonWarn("请选择至少一个")
    return
  }
  DialogConfirm("确定要删除" + length + "项吗？").onOk(() => {
    const numbers = selected.value.map((item: any) => {
      return item.id
    })
    api.delete("/dept/sign", {data: numbers}).then((res: BaseApi) => {
      if (res.data == 200) {
        CommonSuccess("操作成功")
      }
      loadPage()
    })
  })
}

function getNameById(id: number) {
  let name = "无"
  allDept.value.forEach((item: any) => {
    if (item.id == id) {
      name = item.name
    }
  })
  return name
}

function save() {
  api.post("/dept/save", saveForm.value).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
    }
    loadPage()
  })
}

function recover(id: number) {
  api.delete("/dept/recover/" + id).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
    }
    loadPage()
  })
}
</script>