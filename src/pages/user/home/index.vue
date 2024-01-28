<template>
  <div class="q-pa-md ">
    <div class="max-w-[1600px] m-auto">
      <div class="q-ma-md w-[50%] m-auto flex justify-between  box-border border-sky-500 border-2">
        <q-input filled v-model="text" label="搜索店家" class="w-[80%] font-bold" clearable
                 color="primary"/>
        <q-btn square color="primary" icon="search" label="搜索" size="1rem" class="w-[20%]"/>
      </div>
      <div class="w-full flex justify-between  q-mt-lg ">
        <q-card class="w-[22%] bg-grey-1  min-w-[300px]">
          <div class="q-pt-md q-pl-md text-body1 text-bold">全部分类</div>
          <q-list class="grid gap-2 grid-cols-3">
            <q-item v-ripple="false" v-for="sort in allSort" class="q-pa-sm">
              <q-btn flat size="1rem" outline color="primary">
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
            <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"/>
            <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"/>
            <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"/>
            <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"/>
          </q-carousel>
        </q-card>
        <q-card class="w-[22%] min-w-[300px] text-center flex justify-center bg-grey-1 ">
          <q-card-section>
            <div class="q-ma-md">
              <q-btn round>
                <q-avatar size="5rem">
                  <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"/>
                </q-avatar>
              </q-btn>
            </div>
            <div class="text-h6 font-bold q-mt-md">
              请登录！
            </div>
          </q-card-section>
          <q-card-section class="w-full">
            <div class="flex justify-around">
              <q-btn color="primary" size="1rem" rounded label="登录" class="w-[20%] "/>
              <q-btn color="secondary" size="1rem" rounded label="注册" class="w-[20%] "/>
              <q-btn color="purple" size="1rem" rounded outline label="加盟" class="w-[20%] "/>
              <q-btn color="orange" size="1rem" rounded outline label="入驻" class="w-[20%] "/>
            </div>
          </q-card-section>
          <q-card-section>
            <q-list class="grid gap-1 grid-cols-3">
              <q-item v-ripple="false" class="no-padding">
                <q-btn flat size="1rem" outline color="grey">
                  <div class="text-center">
                    <q-icon name="star" color="grey-7"/>
                  </div>
                  <div class="text-center ">
                    我的收藏
                  </div>
                </q-btn>
              </q-item>
              <q-item v-ripple="false" class="no-padding">
                <q-btn flat size="1rem" outline color="grey">
                  <div class="text-center">
                    <q-icon name="schedule" color="grey-7"/>
                  </div>
                  <div class="text-center ">
                    浏览历史
                  </div>
                </q-btn>
              </q-item>
              <q-item v-ripple="false" class="no-padding">
                <q-btn flat size="1rem" outline color="grey">
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
        <div class="text-h6 font-bold q-my-md">热门项目</div>
        <q-list class="w-full flex justify-between">
          <q-card class="w-[32%] flex bg-grey-1" v-ripple>
            <q-card-section class="w-1/2">
              <q-img fit="fill" width="250px" height="200px"
                     src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
              </q-img>
            </q-card-section>
            <q-card-section class=" min-w-1/2">
              <div class="leading-10 q-pa-md">
                <div class="text-h6">点名称</div>
                <div class="text-grey-8">加盟地区：全国</div>
                <div class="text-grey-8">行业：餐饮 矿泉水</div>
                <div class="text-grey-8">门店数：1000+</div>
                <div class="text-grey-8">投资金额：10-20万</div>
              </div>
            </q-card-section>
          </q-card>
          <q-card class="w-[32%] flex bg-grey-1" v-ripple>
            <q-card-section class="w-1/2">
              <q-img fit="fill" width="250px" height="200px"
                     src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
              </q-img>
            </q-card-section>
            <q-card-section class=" min-w-1/2">
              <div class="leading-10 q-pa-md">
                <div class="text-h6">点名称</div>
                <div class="text-grey-8">加盟地区：全国</div>
                <div class="text-grey-8">行业：餐饮 矿泉水</div>
                <div class="text-grey-8">门店数：1000+</div>
                <div class="text-grey-8">投资金额：10-20万</div>
              </div>
            </q-card-section>
          </q-card>
          <q-card class="w-[32%] flex bg-grey-1" v-ripple>
            <q-card-section class="w-1/2">
              <q-img fit="fill" width="250px" height="200px"
                     src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
              </q-img>
            </q-card-section>
            <q-card-section class=" min-w-1/2">
              <div class="leading-10 q-pa-md">
                <div class="text-h6">点名称</div>
                <div class="text-grey-8">加盟地区：全国</div>
                <div class="text-grey-8">行业：餐饮 矿泉水</div>
                <div class="text-grey-8">门店数：1000+</div>
                <div class="text-grey-8">投资金额：10-20万</div>
              </div>
            </q-card-section>
          </q-card>
        </q-list>
      </div>
      <div class="mt-10">
        <div class="text-h6 font-bold q-my-md">全部分类</div>
        <q-list class="w-full flex justify-between">
          <q-card class="w-[49%]  bg-grey-1 q-pa-md" v-ripple="false">
            <div class="text-[1rem] font-bold q-mb-md w-full">餐饮</div>
            <div class="grid gap-2 grid-cols-3 grid-rows-2 ">
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
            </div>
          </q-card>
          <q-card class="w-[49%]  bg-grey-1 q-pa-md" v-ripple="false">
            <div class="text-[1rem] font-bold q-mb-md w-full">餐饮</div>
            <div class="grid gap-2 grid-cols-3 grid-rows-2 ">
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
              <div class="q-my-sm">
                <q-img fit="fill" width="200px" height="150px"
                       src="https://img.alicdn.com/imgextra/i1/6000000002133/O1CN01tq0D8T1Rcxj6Ge3Tr_!!6000000002133-0-octopus.jpg">
                </q-img>
                <div class="text-md text-bold">
                  店名店名店名店名店名店名
                </div>
                <div>
                  10-20万
                </div>
              </div>
            </div>
          </q-card>
        </q-list>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import {onMounted, ref} from "vue";
import {api} from "boot/axios";

const slide = ref(1)
const autoplay = ref(true)
const allSort = ref([])

onMounted(() => {
  loadPage();
})

function loadPage() {
  loadAllSort()
}

function loadAllSort() {
  api.get("/sort/all/parent").then((res: any) => {
    allSort.value = res.data
  })
}
</script>