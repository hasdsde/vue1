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


      <q-card class="q-pa-xs q-mt-lg">
        <q-card-section>
          <q-list class="rounded-borders">
            <q-expansion-item
                expand-separator
                icon="my_location"
                :label="'当前定位：'+currentPosition.name"
                :caption="'坐标:'+currentPosition.lng+','+currentPosition.lat"
                header-class="text-primary"
            >
              <q-card>
                <q-card-section>
                  <div class="flex">
                    <q-select :options="positionSearchResult" class="w-[400px] q-mr-md" dense filled
                              use-input
                              option-label="name"
                              clearable
                              @filter="filterFn"
                              v-model="positionSearchValue" label="输入地址"
                              @update:model-value="updatePosition"
                              debounce="400"/>
                    <q-btn color="primary" label="重新定位城市" @click="getOriginPosition"/>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-expansion-item
                expand-separator
                icon="insights"
                :label="'当前类型：互联网'"
                header-class="text-primary"
            >
              <q-card>
                <q-card-section>
                  <div class="flex">
                    <q-btn color="primary" class="q-mr-md" label="开始分析" @click="getOriginPosition"/>
                    <q-btn color="primary" class="q-mr-md" label="收藏该位置" @click="getOriginPosition"/>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </q-card-section>
      </q-card>
      <q-card class="q-pa-xs q-mt-lg">
        <q-card-section>

          <div id="map_container" class="w-full h-[600px]"></div>
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

import {onMounted, onUnmounted, ref, toRaw} from "vue";
import {useRouter} from "vue-router";
import {api} from "boot/axios";
import {BaseApi} from "components/models";
import {CopyToClickBoard} from "components/utils";
import {CommonSuccess} from "components/dialog";
import AMapLoader from "@amap/amap-jsapi-loader";
//@ts-ignore
window._AMapSecurityConfig = {
  securityJsCode: "858e1662d17c1af4144ffabcbb834717",
};

//高德api
let map: any = null
let geolocationPlugin: any
let placeSearchPlugin: any
let AMapObj: any
//交互
const currentPosition = ref({"name": "石家庄市", lng: "", lat: ""})
const positionSearchValue = ref({name: "石家庄市"})
const positionSearchResult = ref([])
// X：纬度lat,Y：经度lng
//页面相关
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
  loadMap()
}

function loadMap() {
  AMapLoader.load({
    key: "97c29eae0d0c1a274349f1a1d47fb970",
    version: "2.0",
  }).then((AMap) => {
    AMapObj = AMap
    map = new AMap.Map("map_container", {
      viewMode: '2D',
      zoom: 14,
      animateEnable: true,
      mapStyle: "amap://styles/0f2474ac3512b3f4c1f3f27c2a810e6e",
    });

    // 定位插件
    map.plugin('AMap.Geolocation', () => {
      geolocationPlugin = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      geolocationPlugin.getCityInfo((status: any, result: any) => {
        currentPosition.value.name = result.city
        currentPosition.value.lng = result.position[0]
        currentPosition.value.lat = result.position[1]
      });
    })

    //搜索插件
    AMap.plugin('AMap.PlaceSearch', function () {
      placeSearchPlugin = new AMap.PlaceSearch({city: currentPosition.value.name});
    })
  }).catch((e) => {
    console.log(e);
  });
}


function filterFn(val: string, update: Function, abort: any) {
  if (val == "") {
    return
  }
  update(() => {
    placeSearchPlugin.search(val, function (status: string, result: any) {
      // 搜索成功时，result即是对应的匹配数据
      positionSearchResult.value = result.poiList.pois
    })
  })
}

//更新位置
function updatePosition() {
  map.setCenter(toRaw(positionSearchValue.value.location))
  map.setZoom(15)
  currentPosition.value.name = positionSearchValue.value.name
  currentPosition.value.lng = positionSearchValue.value.location.lng
  currentPosition.value.lat = positionSearchValue.value.location.lat
}

//获取原本位置
function getOriginPosition() {
  geolocationPlugin.getCityInfo((state, result) => {
    map.setCenter(toRaw(result.position))
    currentPosition.value.name = result.city
    currentPosition.value.lng = result.position[0]
    currentPosition.value.lat = result.position[1]
  })
}

//内容相关
onUnmounted(() => {
  map?.destroy()
})

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