<template>
  <div class="q-pa-md ">
    <div class="max-w-[1600px] m-auto">
      <q-card class="">
        <q-card-section>
          <div class="float-right">
            <q-btn label="退出登录" flat color="red" class="float-right" to="/login"/>
          </div>
          <div class="flex">
            <q-btn round clas="w-1/5 q-mr-md">
              <q-avatar size="5rem">
                <img :src="userInfo.avatar"/>
              </q-avatar>
            </q-btn>
            <div class="q-ml-md flex content-between w-4/5">
              <div class="text-h6 font-bold w-full q-ml-sm">{{ userInfo.nickName }}</div>
              <div>
                <q-btn label="修改头像" flat color="primary" icon="account_circle" class="q-mr-md"
                       @click="avatarDialog=true"/>
                <q-btn label="修改信息" flat color="primary" icon="edit" class="q-mr-md" @click="saveDialog=true"/>
                <q-btn label="修改密码" flat color="primary" icon="vpn_key" class="q-mr-md"
                       @click="updatePassword= true"/>
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
              v-model="openItem.open2"
          >
            <q-card>
              <q-card-section>
                <q-btn label="清空记录" flat color="red" @click="handleClearHistory"/>
              </q-card-section>
              <q-card-section>
                <div class="flex justify-between">
                  <q-card class="w-[49%] flex bg-grey-1 q-mb-md no-border" v-ripple v-for="item in historys"
                          @click="handleJump(item.id)">
                    <q-card-section class="w-[40%] overflow-hidden q-pr-none">
                      <q-img fit="cover" height="240px"
                             :src="item.avatarUrl">
                      </q-img>
                    </q-card-section>
                    <q-card-section class=" w-[60%]">
                      <div class="leading-7 q-pa-md">
                        <div class="text-h6 font-bold">{{ item.name }}</div>
                        <div class="text-grey-8">{{ item.companyName }}</div>
                        <div class="text-grey-8">{{ item.mode }},{{ item.claimShop }} +门店</div>
                        <div class="text-grey-8">员工要求：{{ item.claimStaff }}人</div>
                        <div>
                          <q-badge transparent align="middle" color="orange" class="q-mr-md"
                                   v-for="ad in item.advantage">
                            {{ ad }}
                          </q-badge>
                        </div>
                        <div>
                          需求资金: <span class="text-xl text-orange text-bold">{{ item.claimMoney }}万元+</span>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-card-section>
            </q-card>
            <div class="flex justify-center q-pb-md">
              <q-pagination v-model="pageHistorys.currentPage"
                            :max="Math.ceil(pageHistorys.total/pageHistorys.pageSize)"
                            max-pages="6"
                            @update:model-value="loadPage">
              </q-pagination>
            </div>
          </q-expansion-item>
          <q-expansion-item
              expand-separator
              icon="star"
              label="我的收藏"
              header-class="text-secondary text-lg"
              v-model="openItem.open1"
          >
            <q-card>
              <q-card-section>
                <div class="flex justify-between">
                  <q-card class="w-[49%] flex bg-grey-1 q-mb-md no-border" v-ripple v-for="item in likes"
                          @click="handleJump(item.id)">
                    <q-card-section class="w-[40%] overflow-hidden q-pr-none">
                      <q-img fit="cover" height="240px"
                             :src="item.avatarUrl">
                      </q-img>
                    </q-card-section>
                    <q-card-section class=" w-[60%]">
                      <div class="leading-7 q-pa-md">
                        <div class="float-right">
                          <div v-if="likeIds.indexOf(item.id)>-1">
                            <q-btn outline round color="orange" icon="star" @click="removeLike(item.id)"/>
                          </div>
                          <div v-else>
                            <q-btn outline round color="orange" icon="star_border" @click="addLike(item.id)"/>
                          </div>
                        </div>
                        <div class="text-h6 font-bold">{{ item.name }}</div>
                        <div class="text-grey-8">{{ item.companyName }}</div>
                        <div class="text-grey-8">{{ item.mode }},{{ item.claimShop }} +门店</div>
                        <div class="text-grey-8">员工要求：{{ item.claimStaff }}人</div>
                        <div>
                          <q-badge transparent align="middle" color="orange" class="q-mr-md"
                                   v-for="ad in item.advantage">
                            {{ ad }}
                          </q-badge>
                        </div>
                        <div>
                          需求资金: <span class="text-xl text-orange text-bold">{{ item.claimMoney }}万元+</span>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-card-section>
            </q-card>
            <div class="flex justify-center q-pb-md">
              <q-pagination v-model="pageLikes.currentPage"
                            :max="Math.ceil(pageLikes.total/pageLikes.pageSize)"
                            max-pages="6"
                            @update:model-value="loadPage">
              </q-pagination>
            </div>
          </q-expansion-item>
          <q-expansion-item
              expand-separator
              icon="widgets"
              label="商户管理"
              header-class="text-purple text-lg"
              v-model="openItem.open3"
          >
            <q-card>
              <q-card-section>
                <q-btn label="新增" flat color="primary" @click="addDialog=true"/>
              </q-card-section>
              <q-card-section>
                <div class="flex justify-between">
                  <q-card class="w-[49%] flex bg-grey-1 q-mb-md no-border" v-ripple v-for="item in userItems"
                          @click="handleJump(item.id)">
                    <q-card-section class="w-[40%] overflow-hidden q-pr-none">
                      <q-img fit="cover" height="240px"
                             :src="item.avatarUrl">
                      </q-img>
                    </q-card-section>
                    <q-card-section class=" w-[60%]">
                      <div class="leading-7 q-pa-md">
                        <div class="float-right">
                          <q-btn label="编辑" color="primary" class="q-mr-md" @click="handleUpdate(item)"/>
                          <q-btn label="删除" color="red" @click="handleDelete(item.id)"/>
                        </div>
                        <div class="text-h6 font-bold">{{ item.name }}</div>
                        <div class="text-grey-8">{{ item.companyName }}</div>
                        <div class="text-grey-8">{{ item.mode }},{{ item.claimShop }} +门店</div>
                        <div class="text-grey-8">员工要求：{{ item.claimStaff }}人</div>
                        <div>
                          <q-badge transparent align="middle" color="orange" class="q-mr-md"
                                   v-for="ad in item.advantage">
                            {{ ad }}
                          </q-badge>
                        </div>
                        <div>
                          需求资金: <span class="text-xl text-orange text-bold">{{ item.claimMoney }}万元+</span>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-card-section>
            </q-card>
            <div class="flex justify-center q-pb-md">
              <q-pagination v-model="pageItems.currentPage"
                            :max="Math.ceil(pageItems.total/pageItems.pageSize)"
                            max-pages="6"
                            @update:model-value="loadPage">
              </q-pagination>
            </div>
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
    <q-dialog v-model="avatarDialog" position="top">
      <q-card>
        <q-uploader
            :factory="factoryFn"
            auto-upload
            multiple
            label="上传图片"
            style="max-width: 300px"
        />
      </q-card>
    </q-dialog>
    <q-dialog v-model="saveDialog" position="right" full-height="" class="">
      <q-card class="q-pa-sm min-w-[400px]">
        <q-card-section class="row items-center">
          <div class="text-h6">修改信息</div>
          <q-space class=""></q-space>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="userInfo.nickName" label="显示名称" placeholder="显示名称"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="userInfo.userName" label="登录名" placeholder="登录名"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="userInfo.avatar" label="头像" placeholder="头像"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="userInfo.comment" label="备注" placeholder="备注"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="userInfo.email" label="邮箱" placeholder="邮箱"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-input v-model="userInfo.phone" label="手机号" placeholder="手机号"/>
        </q-card-section>
        <q-card-section class="q-pa-md">
          <q-select :options="[{label:'男',value:1},{label:'女',value:2},{label:'未知',value:0}]" v-model="userInfo.sex"
                    clearable label="性别" placeholder="性别" map-options emit-value/>
        </q-card-section>

        <q-card-section class="text-primary">
          <div class="row justify-between">
            <div class="col">
              <q-btn flat="" color="red" label="重置" @click="ResetForm(userInfo)">
              </q-btn>
            </div>
            <div class="col text-right">
              <q-btn color="primary" label="提交" v-close-popup="" @click="saveUserInfo">
              </q-btn>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="updatePassword">
      <q-card class="q-pa-md">
        <q-card-section class="row items-center">
          <div class="text-h6">修改密码</div>
          <q-space class=""></q-space>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>
        <q-card-section>
          <q-input class="w-[300px]" outlined v-model="passwordForm.oldPassword" label="旧密码"/>
        </q-card-section>
        <q-card-section>
          <q-input class="w-[300px]" outlined v-model="passwordForm.newPassword" label="新密码"/>
        </q-card-section>
        <q-card-actions>
          <q-space></q-space>
          <q-btn label="确定" class="float-right" color="primary" @click="handleUpdatePassword" v-close-popup/>
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
import {useRouter} from "vue-router";
import {ResetForm} from "components/utils";

const openItem = ref({
  open1: false,
  open2: false,
  open3: false,
})
const updatePassword = ref(false)
const saveDialog = ref(false)
const addDialog = ref(false)
const title = ref("新增")
const passwordForm = ref({
  oldPassword: "",
  newPassword: ""
})
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
const router = useRouter()
const historys = ref([])
const likes = ref([])
const likeIds = ref([])
const avatarDialog = ref(false)
const userInfo = ref({
  nickName: "请登录",
  avatar: ''
})
const pageLikes = ref({
  currentPage: 1,
  pageSize: 10,
  total: 1
});
const pageHistorys = ref({
  currentPage: 1,
  pageSize: 10,
  total: 1
});
const pageItems = ref({
  currentPage: 1,
  pageSize: 6,
  total: 1
});
onMounted(() => {
  loadPage()
})

function loadPage() {
  loadParentSort()
  loadUserItems()
  api.get("/sort/all").then((res: BaseApi) => {
    sorts.value = res.data
  })
  loadItemOpen()
  loadHistory()
  loadLikes()
  getUserLikes()
  getUserInfo()
}

function getUserInfo() {
  let use = JSON.parse(localStorage.getItem("userInfo") as string);
  if (use == null) {
    router.push("/login")
  }
  userInfo.value = use;
}

function getUserLikes() {
  api.get("/like/brandId").then((res: any) => {
    likeIds.value = res.data
  })
}

function loadItemOpen() {
  let open = router.currentRoute.value.query.open
  if (open == "1") {
    openItem.value.open1 = true
  }
  if (open == "2") {
    openItem.value.open2 = true
  }
  if (open == "3") {
    openItem.value.open3 = true
  }
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
  api.get("/brand/getByUser", {params: pageItems.value}).then((res: any) => {
    res.data.records.forEach((item: any) => {
      item.advantage = item.advantage.split(",")
      item.bodyUrl = item.bodyUrl.split(",")
    })
    userItems.value = res.data.records
    pageItems.value.total = res.data.total
  })
}

function handleJump(id: number) {
  router.push("/location?id=" + id)
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

function saveUserInfo() {
  api.post("/user/update", userInfo.value).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
    }
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

function loadHistory() {
  api.get("/history/brand", {params: pageHistorys.value}).then((res: BaseApi) => {
    res.data.records.forEach((item: any) => {
      item.advantage = item.advantage.split(",")
      item.bodyUrl = item.bodyUrl.split(",")
    })
    historys.value = res.data.records
    pageHistorys.value.total = res.data.total

  })
}

function handleClearHistory() {
  DialogConfirm("确定要清空记录吗？").onOk(() => {
    api.delete("/history/del/all").then((res: BaseApi) => {
      if (res.code == 200) {
        CommonSuccess("已删除")
      }
      loadPage()
    })
  })
}

function loadLikes() {
  api.get("/like/brand", {params: pageLikes.value}).then((res: BaseApi) => {
    res.data.records.forEach((item: any) => {
      item.advantage = item.advantage.split(",")
      item.bodyUrl = item.bodyUrl.split(",")
    })
    likes.value = res.data.records
    pageLikes.value.total = res.data.total
  })
}

function addLike(id: any) {
  api.post("/like?id=" + id).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("收藏成功")
    }
    loadPage()
  })
}

function removeLike(id: any) {
  api.delete("/like/del?id=" + id).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("取消收藏")
    }
    loadPage()
  })
}

function factoryFn(file: QUploaderFactoryFn) {
  let avatar = ""
  const data = new FormData
  data.append("file", file[0])
  api.post('/file/upload', data).then((res: BaseApi) => {
    if (res.code == 200) {
      avatar = res.data
      api.post("/user/update", {avatar: avatar}).then((res: BaseApi) => {
        if (res.code == 200) {
          CommonSuccess("更新完成，重新登录生效");
        }
      })
    }
  })
}

function handleUpdatePassword() {
  api.post("/user/password", passwordForm.value).then((res: BaseApi) => {
    if (res.code == 200) {
      CommonSuccess("操作成功")
      router.push("/login")
    }
  })
}
</script>
