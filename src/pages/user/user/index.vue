<template>
  <div class="q-pa-md ">
    <div class="max-w-[1600px] m-auto">
      <q-card class="">
        <q-card-section>
          <div class="float-right">
            <q-btn label="退出登录" flat color="red" class="float-right"/>
          </div>
          <div class="flex">
            <q-btn round clas="w-1/5 q-mr-md">
              <q-avatar size="5rem">
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"/>
              </q-avatar>
            </q-btn>
            <div class="q-ml-md flex content-between w-4/5">
              <div class="text-h6 font-bold w-full q-ml-sm">用户名</div>
              <div>
                <q-btn label="修改头像" flat color="primary" icon="account_circle" class="q-mr-md"/>
                <q-btn label="修改信息" flat color="primary" icon="edit" class="q-mr-md"/>
                <q-btn label="修改密码" flat color="primary" icon="vpn_key" class="q-mr-md"/>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="q-mt-lg ">

        <q-list bordered class="rounded-borders q-pa-md">
          <q-expansion-item
              default-opened
              expand-separator
              icon="schedule"
              label="浏览历史"
              header-class="text-primary text-lg"

          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
              expand-separator
              icon="star"
              label="我的收藏"
              header-class="text-secondary text-lg"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
              expand-separator
              icon="widgets"
              label="商户管理"
              header-class="text-purple text-lg"
              default-opened
          >
            <q-card>
              <q-card-section>
                <q-btn label="新增" flat color="primary" @click="addDialog=true"/>
              </q-card-section>
              <q-card-section>
                <q-card class="w-full flex bg-grey-1 q-mb-md no-border" v-ripple v-for="item in userItems">
                  <q-card-section class="w-1/4 overflow-hidden">
                    <q-img fit="fill" height="280px"
                           :src="item.avatarUrl">
                    </q-img>
                  </q-card-section>
                  <q-card-section class=" w-3/4">
                    <div class="leading-10 q-pa-md">
                      <div class="float-right">
                        <q-btn label="编辑" color="primary" class="q-mr-md" @click="handleUpdate(item)"/>
                        <q-btn label="删除" color="red" @click="handleDelete(item.id)"/>
                      </div>
                      <div class="text-h6 font-bold">{{ item.name }}</div>
                      <div class="text-grey-8">{{ item.companyName }}</div>
                      <div class="text-grey-8">{{ item.mode }},{{ item.claimShop }} +门店</div>
                      <div class="text-grey-8">员工要求：{{ item.claimStaff }}人</div>
                      <div>
                        <q-badge transparent align="middle" color="orange" class="q-mr-md" v-for="ad in item.advantage">
                          {{ ad }}
                        </q-badge>
                      </div>
                      <div>
                        需求资金: <span class="text-xl text-orange text-bold">{{ item.claimMoney }}万元+</span>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-list>
      </q-card>
    </div>
    <q-dialog v-model="addDialog">
      <q-card class="min-w-[800px]">
        <q-card-section>
          <div class="text-h6 font-bold">{{ title }}</div>
        </q-card-section>

        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">品牌名：</span>
          <q-input v-model="saveForm.name" outlined label="品牌名" dense/>
        </q-card-section>
        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">分类：</span>
          <q-select v-model="currentSort" outlined dense label="分类" :options="parentSort" option-value="id"
                    class="w-[200px] q-mr-md" @update:model-value="getChildernSort"
                    option-label="name" emit-value map-options/>
          <q-select v-model="saveForm.sortId" outlined dense label="分类" :options="sorts" option-value="id"
                    class="w-[200px]"
                    option-label="name" emit-value map-options/>
        </q-card-section>
        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">头图：</span>
          <q-input v-model="saveForm.avatarUrl" outlined label="头图" dense class="q-mr-md"/>
          <q-uploader
              :factory="uploadAImg"
              label="只能上传一张"
              auto-upload
              style="max-width: 300px"
          />
        </q-card-section>
        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">优势：</span>
          <q-select v-model="saveForm.advantage" dense
                    outlined
                    use-input
                    use-chips
                    multiple
                    hide-dropdown-icon
                    :options="['优势1','优势2','优势3','优势4','优势5','优势6','优势7']"
                    new-value-mode="add-unique"
                    label="优势" placeholder="优势"/>
        </q-card-section>

        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">经营模式：</span>
          <q-select v-model="saveForm.mode" label="经营模式" outlined dense placeholder="经营模式" class="w-[200px]"
                    :options="['经销','代理','特许','连锁','直营','其他',]"/>
        </q-card-section>

        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">审核时间：</span>
          <q-input v-model="saveForm.claimCheck" label="审核时间" outlined dense placeholder="审核" type="number"/>
        </q-card-section>

        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">需求金额：</span>
          <q-input v-model="saveForm.claimMoney" label="需求金额（万元）" type="number" outlined dense
                   placeholder="需求金额"/>
        </q-card-section>

        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">门店数：</span>
          <q-input v-model="saveForm.claimShop" label="店面面积" type="number" outlined dense placeholder="门店数"/>
        </q-card-section>

        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">员工要求：</span>
          <q-input v-model="saveForm.claimStaff" label="员工要求（人）" type="number" outlined dense
                   placeholder="员工要求"/>
        </q-card-section>

        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">公司地址：</span>
          <q-input v-model="saveForm.companyAddress" label="公司地址" outlined dense placeholder="公司地址"/>
        </q-card-section>

        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">公司名：</span>
          <q-input v-model="saveForm.companyName" label="公司名" outlined dense placeholder="公司名"/>
        </q-card-section>

        <q-card-section class="q-pa-md flex items-center">
          <span class="w-[10%]">主题图片：</span>
          <q-select v-model="saveForm.bodyUrl" dense
                    outlined
                    use-input
                    use-chips
                    multiple
                    hide-dropdown-icon
                    new-value-mode="add-unique"
                    class="w-[200px] q-mr-md"
                    label="图片" placeholder="图片"/>
          <q-uploader
              :factory="uploadMutiImg"
              label="上传不多于五张"
              auto-upload
              style="max-width: 300px"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="保存" color="primary" v-close-popup @click="handleSave"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup lang="ts">

import {onMounted, ref} from "vue";
import {QUploaderFactoryFn} from "quasar";
import {api} from "boot/axios";
import {BaseApi} from "components/models";
import {CommonSuccess, DialogConfirm} from "components/dialog";

const addDialog = ref(false)
const title = ref("新增")
const saveForm: any = ref({
  "id": "",
  "name": "",
  "sortId": "",
  "avatarUrl": "",
  "advantage": [],
  "mode": "",
  "claimCheck": "",
  "claimMoney": "",
  "claimShop": "",
  "claimStaff": "",
  "companyAddress": "",
  "companyName": "",
  "bodyUrl": []
});
const parentSort = ref([])
const sorts = ref([])
const currentSort = ref()
const userItems: any = ref([])
onMounted(() => {
  loadPage()
})

function loadPage() {
  loadParentSort()
  loadUserItems()
  api.get("/sort/all").then((res: BaseApi) => {
    sorts.value = res.data
  })
}

function handleDelete(numbers: number) {
  const list: number[] = []
  list.push(numbers)
  DialogConfirm("确定要删除吗").onOk(() => {
    api.delete("/brand/del/sign", {data: list}).then((res: BaseApi) => {
      if (res.code == 200) {
        loadPage()
        CommonSuccess("成功")
      }
    })
  })
}

function handleUpdate(item: any[]) {
  saveForm.value = {...item}
  title.value = "修改"
  addDialog.value = true
}

function loadUserItems() {
  api.get("/brand/getByUser").then((res: any) => {
    res.data.forEach((item: any) => {
      item.advantage = item.advantage.split(",")
      item.bodyUrl = item.bodyUrl.split(",")
    })
    userItems.value = res.data
  })
}

function handleSave() {
  saveForm.value.advantage = saveForm.value.advantage.toString()
  saveForm.value.bodyUrl = saveForm.value.bodyUrl.toString()
  api.post("/brand", saveForm.value).then((res: any) => {
    if (res.code == "200") {
      CommonSuccess("上传完成")
    }
    loadPage()
  })
}

function getChildernSort() {
  api.get("/sort/all").then((res: BaseApi) => {
    sorts.value = res.data.filter((item: any) => {
      return item.parentId == currentSort.value
    })
  })
}

function uploadAImg(file: QUploaderFactoryFn) {
  const data = new FormData
  data.append("file", file[0])
  api.post('/file/upload', data).then((res: BaseApi) => {
    if (res.code == 200) {
      saveForm.value.avatarUrl = res.data
      CommonSuccess("上传完成")
    }
  })
}

function uploadMutiImg(file: QUploaderFactoryFn) {
  const data = new FormData
  data.append("file", file[0])
  api.post('/file/upload', data).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("上传完成")
      saveForm.value.bodyUrl.push(res.data)
    }
  })
}

function loadParentSort() {
  api.get("/sort/all/parent").then((res: BaseApi) => {
    parentSort.value = res.data
  })

}
</script>
