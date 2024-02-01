<template>
  <div class="q-pa-md ">
    <div class="max-w-[1600px] m-auto">
      <q-card class="w-full flex bg-grey-1 q-mb-md no-border" v-ripple>
        <q-card-section class="w-1/4 overflow-hidden">
          <q-img fit="fill" height="280px"
                 :src="currentItem.avatarUrl">
          </q-img>
        </q-card-section>
        <q-card-section class=" w-3/4">
          <div class="leading-10 q-pa-md">
            <div class="float-right">
              <div class="float-right">
                <div v-if="likeIds.indexOf(currentItem.id)>-1">
                  <q-btn outline round color="orange" icon="star" @click="removeLike(currentItem.id)"/>
                </div>
                <div v-else>
                  <q-btn outline round color="orange" icon="star_border" @click="addLike(currentItem.id)"/>
                </div>
              </div>
            </div>
            <div class="text-h6 font-bold">{{ currentItem.name }}</div>
            <div class="text-grey-8">{{ currentItem.companyName }}</div>
            <div class="text-grey-8">{{ currentItem.mode }},{{ currentItem.claimShop }} +门店</div>
            <div class="text-grey-8">员工要求：{{ currentItem.claimStaff }}人</div>
            <div>
              <q-badge transparent align="middle" color="orange" class="q-mr-md" v-for="ad in currentItem.advantage">
                {{ ad }}
              </q-badge>
            </div>
            <div>
              需求资金: <span class="text-xl text-orange text-bold">{{ currentItem.claimMoney }}万元+</span>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="q-mt-lg">
        <q-card-section>
          <div class="flex">
            <q-btn round clas="w-1/5 q-mr-md">
              <q-avatar size="5rem">
                <img :src="currentUser.avatar"/>
              </q-avatar>
            </q-btn>
            <div class="q-ml-md flex content-between w-[90%]">
              <div class="text-h6 font-bold w-full q-mt-md">
                <span>
                {{ currentUser.nickName }}
                </span>
                <q-btn label="电话咨询" color="positive" class="float-right" icon="call"
                       @click="CopyToClickBoard(currentUser.phone)"/>
                <q-btn label="发送邮件" color="cyan" class="float-right q-mr-md" icon="email"
                       @click="CopyToClickBoard(currentUser.email)"/>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="q-mt-lg flex">
        <q-img :src="img" width="800px" v-for="img in currentItem.bodyUrl"/>
      </q-card>
    </div>
  </div>
</template>
<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {api} from "boot/axios";
import {BaseApi} from "components/models";
import {CopyToClickBoard} from "components/utils";
import {CommonSuccess} from "components/dialog";

const router = useRouter().currentRoute.value
const currentItem: any = ref({})
const currentUser = ref({})
const likeIds = ref([])
onMounted(() => {
  const router = useRouter().currentRoute.value
  loadPage()
})

function loadPage() {
  getItemById(router.query.id)
  getUserLikes()
}

function getItemById(id: any) {
  api.get("/brand/" + id).then((res: BaseApi) => {
    if (res.code == 200) {
      currentItem.value = res.data
      currentItem.value.advantage = currentItem.value.advantage.split(",")
      currentItem.value.bodyUrl = currentItem.value.bodyUrl.split(",")
      getUserInfo(res.data.userId)
    }
  })
}

function getUserInfo(userId: number) {
  api.get("/user/info?id=" + userId.toString()).then((res: BaseApi) => {
    currentUser.value = res.data
  })
}

function getUserLikes() {
  api.get("/like/brandId").then((res: any) => {
    likeIds.value = res.data
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
</script>
<style scoped lang="sass">

</style>