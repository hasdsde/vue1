<template>
  <div class="q-pa-md ">
    <div class="max-w-[1600px] m-auto">
      <div class="q-ma-md w-[50%] m-auto flex justify-between  box-border border-sky-500 border-2">
        <q-input filled v-model="searchText" label="搜索店家" class="w-[80%] font-bold" clearable
                 color="primary" @keyup.enter="handleSearch"/>
        <q-btn square color="primary" icon="search" label="搜索" size="1rem" class="w-[20%]" @click="handleSearch"/>
      </div>
      <div class="w-full flex justify-between  q-mt-lg ">
        <q-card class="w-[22%] bg-grey-1  min-w-[300px]">
          <q-list class="grid gap-2 grid-cols-3 q-mt-md">
            <q-item v-ripple="false" v-for="sort in allSort" class="q-pa-sm">
              <q-btn flat size="1rem" outline color="primary" @click="handleSort(sort.id)">
                <div class="text-center">
                  <q-icon :name="sort.icon"/>
                </div>
                <div class="text-center ">
                  {{ sort.name }}
                </div>
              </q-btn>
            </q-item>
          </q-list>
        </q-card>
        <q-card class="w-[53%] box-border border-4 min-w-[300px]">
          <q-carousel
              animated
              v-model="slide"
              arrows
              navigation
              infinite
              :autoplay="autoplay"
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
          >
            <q-carousel-slide :name="index" :img-src="banner.url" v-for="(banner,index) in banners"/>
          </q-carousel>
        </q-card>
        <q-card class="w-[22%] min-w-[300px] text-center flex justify-center bg-grey-1 ">
          <q-card-section>
            <div class="q-ma-md">
              <q-btn round>
                <q-avatar size="5rem">
                  <img v-if="userInfo.avatar==''" src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"/>
                  <img v-else :src="userInfo.avatar"/>
                </q-avatar>
              </q-btn>
            </div>
            <div class="text-h6 font-bold q-mt-md">
              你好，{{ userInfo.nickName }}
            </div>
          </q-card-section>
          <q-card-section class="w-full">
            <div class="flex justify-around">
              <q-btn v-if="token==''" color="primary" size="1rem" rounded label="登录" class="w-[20%] " to="/login"/>
              <q-btn v-if="token==''" color="secondary" size="1rem" rounded label="注册" class="w-[20%]"/>
              <q-btn color="purple" size="1rem" rounded outline label="加盟" class="w-[20%] " to="/sort"/>
              <q-btn color="orange" size="1rem" rounded outline label="入驻" class="w-[20%] " to="/user?open=3"/>
              <q-btn v-if="token!=''" color="primary" size="1rem" rounded label="设置" class="w-[20%]" to="/user"/>
              <q-btn v-if="token!=''" color="red" size="1rem" rounded label="注销" class="w-[20%] " to="/login"/>
            </div>
          </q-card-section>
          <q-card-section>
            <q-list class="grid gap-1 grid-cols-3">
              <q-item v-ripple="false" class="no-padding">
                <q-btn flat size="1rem" outline color="grey" to="/user?open=1">
                  <div class="text-center">
                    <q-icon name="star" color="grey-7"/>
                  </div>
                  <div class="text-center ">
                    我的收藏
                  </div>
                </q-btn>
              </q-item>
              <q-item v-ripple="false" class="no-padding">
                <q-btn flat size="1rem" outline color="grey" to="/user?open=2">
                  <div class="text-center">
                    <q-icon name="schedule" color="grey-7"/>
                  </div>
                  <div class="text-center ">
                    浏览历史
                  </div>
                </q-btn>
              </q-item>
              <q-item v-ripple="false" class="no-padding">
                <q-btn flat size="1rem" outline color="grey" to="/user?open=3">
                  <div class="text-center">
                    <q-icon name="widgets" color="grey-7"/>
                  </div>
                  <div class="text-center ">
                    入驻管理
                  </div>
                </q-btn>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="mt-10">
        <div class="text-h6 font-bold q-my-md">最新项目</div>
        <q-list class="w-full flex justify-between">
          <q-card class="w-[32%] flex bg-grey-1 q-mb-md no-border q-pa-sm" v-ripple v-for="item in newItems"
                  @click="handleJump(item.id)">
            <q-card-section class="w-[35%] overflow-hidden q-pa-sm">
              <q-img fit="cover" height="250px"
                     :src="item.avatarUrl">
              </q-img>
            </q-card-section>
            <q-card-section class=" w-[65%] q-pa-sm">
              <div class="leading-8  ">
                <div class="text-h6 font-bold">{{ item.name }}</div>
                <div class="text-grey-8">{{ item.companyName }}</div>
                <div class="text-grey-8">
                  <q-badge transparent align="middle" color="primary" class="q-mr-md">
                    {{ item.mode }}
                  </q-badge>
                  <q-badge transparent align="middle" color="primary" class="q-mr-md">
                    {{ item.claimShop }} +门店
                  </q-badge>
                </div>
                <div class="text-grey-8">
                  员工要求：{{ item.claimStaff }}人
                  &nbsp;&nbsp;&nbsp;审核时间： 约{{ item.claimCheck }}天
                </div>
                <div>
                  <q-badge transparent align="middle" color="orange" class="q-mr-md" v-for="ad in item.advantage">
                    {{ ad }}
                  </q-badge>
                </div>
                <div>
                  需求资金: <span class="text-xl text-orange text-bold">{{ item.claimMoney }}万元</span>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-list>
      </div>
      <div class="mt-10">
        <div class="flex justify-left items-center">
          <div class="text-h6 font-bold q-my-md q-mr-md">全部分类</div>
          <q-btn-toggle
              v-model="sortId"
              class="my-custom-toggle"
              no-caps
              unelevated
              toggle-color="primary"
              color="white"
              text-color="primary"
              :options="sorts"/>
        </div>
      </div>
      <q-list class="w-full flex justify-between">
        <q-card class="w-full  bg-grey-1 q-pa-md" v-ripple="false">
          <div class="grid gap-4 grid-cols-5 grid-rows-2 ">
            <div class="q-my-sm cursor-pointer" v-for="item in all" @click="router.push('/location?id='+item.id)">
              <q-img fit="fill" width="240px" height="150px"
                     :src="item.avatarUrl">
              </q-img>
              <div class="text-md text-bold">
                {{ item.name }}
              </div>
              <div>
                <span class="text-orange text-lg">{{ item.claimMoney }}万元</span>
              </div>
            </div>
          </div>
        </q-card>
      </q-list>
    </div>
  </div>

</template>
<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {api} from "boot/axios";
import {useRouter} from "vue-router";
import {BaseApi} from "components/models";

const sorts: any = ref([])
const router = useRouter()
const slide = ref(0)
const autoplay = ref(true)
const allSort = ref([])
const searchText = ref("")
const banners = ref([])
const newItems = ref([])
const sortId = ref(0)
const all = ref([])
const token = ref("")
const userInfo = ref({
  "nickName": "请登录",
  "avatar": ''
})
onMounted(() => {
  loadPage();
})

function loadPage() {
  loadBanner()
  loadAllSort()
  getNewItem()
  getParentSort()
  loadItemSort()
  getUserInfo()
}

watch(sortId, () => {
  loadItemSort()
})

function getUserInfo() {
  userInfo.value = JSON.parse(localStorage.getItem("userInfo") as string);
  token.value = localStorage.getItem("token") as string
}

function loadItemSort() {
  api.get("/brand/page?sortId=" + sortId.value).then((res: BaseApi) => {
    res.data.records.forEach((item: any) => {
      item.advantage = item.advantage.split(',')
    })
    all.value = res.data.records
  })
}

function getNewItem() {
  api.get("/brand/page?currentPage=1&pageSize=3").then((res: BaseApi) => {
    res.data.records.forEach((item: any) => {
      item.advantage = item.advantage.split(',')
    })
    newItems.value = res.data.records
  })
}

function loadBanner() {
  api.get("/banner/page").then((res: BaseApi) => {
    banners.value = res.data.records
  })
}

function handleSearch() {
  router.push("/sort?name=" + searchText.value)
}

function handleSort(id: number) {
  router.push("/sort?sortId=" + id)

}


function loadAllSort() {
  api.get("/sort/all/parent").then((res: any) => {
    allSort.value = res.data
  })
}

function handleJump(id: number) {
  router.push("/location?id=" + id)
}

function getParentSort() {
  sorts.value = []
  api.get("/sort/all/parent").then((res: any) => {
    sorts.value.push({"label": '全部', "value": 0})
    res.data.forEach((item: any) => {
      sorts.value.push({"label": item.name, "value": item.id})
    })
  })
}
</script>