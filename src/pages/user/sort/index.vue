<template>
  <div class="q-pa-md ">
    <div class="max-w-[1600px] m-auto">
      <div class="q-ma-md w-[50%] m-auto flex justify-between  box-border border-sky-500 border-2">
        <q-input filled v-model="queryForm.name" label="搜索店家" class="w-[80%] font-bold" clearable
                 color="primary" debounce="500"/>
        <q-btn square color="primary" icon="search" label="搜索" size="1rem" class="w-[20%]"/>
      </div>
      <q-card class="bg-grey-2 q-mt-lg">
        <q-card-section>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">全部分类：</div>
            <q-btn-toggle
                v-model="queryForm.sortId"
                class="my-custom-toggle"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="sorts"/>
          </div>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">经营模式：</div>
            <q-btn-toggle
                v-model="queryForm.mode"
                spread
                class="my-custom-toggle"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="[
          {label: '全部', value: '0'},
          {label: '经销', value: '经销'},
          {label: '代理', value: '代理'},
          {label: '特许', value: '特许'},
          {label: '连锁', value: '连锁'},
          {label: '直营', value: '直营'},
          {label: '其他', value: '其他'},
        ]"/>
          </div>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">审核时间：</div>
            <q-btn-toggle
                v-model="queryForm.claimCheck"
                class="my-custom-toggle"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="[
                {label: '不限', value: '0'},
                {label: '10天内', value: '10'},
                {label: '20天内', value: '20'},
                {label: '30天内', value: '30'},
                {label: '40天内', value: '40'},
        ]"
            />
          </div>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">投资金额：</div>
            <q-btn-toggle
                v-model="queryForm.claimMoney"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="[
                {label: '不限', value: '0'},
              {label: '0-10万元', value: '10'},
              {label: '10-20万元', value: '20'},
              {label: '20-30万元', value: '30'},
              {label: '30-40万元', value: '40'},
              {label: '40万元以上', value: '50'},
        ]"/>
          </div>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">员工要求：</div>
            <q-btn-toggle
                v-model="queryForm.claimStaff"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="[
                {label: '不限', value: '0'},
              {label: '1人', value: '1'},
              {label: '2人', value: '2'},
              {label: '3人', value: '3'},
              {label: '4人', value: '4'},
              {label: '4人以上', value: '5'},
        ]"
            />
          </div>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">门店数量：</div>
            <q-btn-toggle
                v-model="queryForm.claimShop"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="[
                {label: '不限', value: '0'},
              {label: '500家', value: '500'},
              {label: '1000家', value: '1000'},
              {label: '2000家', value: '2000'},
              {label: '5000家', value: '5000'},
              {label: '10000家以上', value: '10000'},
        ]"
            />
          </div>
        </q-card-section>
      </q-card>

      <q-list class="q-mt-lg flex justify-between">
        <q-card class="w-[49%] flex bg-grey-1 q-mb-md no-border q-pa-sm" v-ripple v-for="item in records"
                @click="handleJump(item.id)">
          <q-card-section class="w-[35%] overflow-hidden q-pa-sm">
            <q-img fit="cover" height="220px"
                   :src="item.avatarUrl">
            </q-img>
          </q-card-section>
          <q-card-section class=" w-[65%] q-pa-sm">
            <div class="leading-8  ">
              <div class="float-right">
                <div v-if="likes.indexOf(item.id)>-1">
                  <q-btn outline round color="orange" icon="star" @click="removeLike(item.id)"/>
                </div>
                <div v-else>
                  <q-btn outline round color="orange" icon="star_border" @click="addLike(item.id)"/>
                </div>
              </div>
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

      <div class="flex q-mt-lg items-center justify-center">
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
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import {api} from "boot/axios";
import {BaseApi} from "components/models";
import {useRouter} from "vue-router";
import {CommonSuccess} from "components/dialog";

const router = useRouter()
onMounted(() => {
  const query = useRouter().currentRoute.value.query
  queryForm.value.name = query.name
  const id: string = query.sortId == null ? "0" : query.sortId
  queryForm.value.sortId = parseInt(id)
  loadPage()
})
const sorts: any = ref([])
const records = ref([])
const likes = ref([])
const queryForm: any = ref({
  claimCheck: "0",
  claimMoney: "0",
  claimShop: "0",
  claimStaff: "0",
  mode: "0",
  name: "",
  sortId: "0"
});
const page = ref({
  currentPage: 1,
  pageSize: 10,
  total: 1
})

function loadPage() {
  getParentSort()
  handleSearch()
  getUserLikes()
}


function getUserLikes() {
  api.get("/like/brandId").then((res: any) => {
    likes.value = res.data
  })
}

watch((queryForm.value), (value, oldValue, onCleanup) => {
  handleSearch()
})

function handleSearch() {
  api.get("/brand/page", {params: {...queryForm.value, ...page.value}}).then((res: BaseApi) => {
    res.data.records.forEach((item) => {
      item.advantage = item.advantage.split(',')
    })
    records.value = res.data.records
    page.value.total = res.data.total
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
<style scoped lang="sass">

</style>