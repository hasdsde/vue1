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
                :label="'当前类型：'+sort.name"
                header-class="text-primary"
            >
              <q-card>
                <q-card-section>
                  <div class="flex items-center">
                    <q-btn color="primary" class="q-mr-md" label="开始分析" @click="startAnalyse"/>
                    <q-btn color="primary" class="q-mr-md" label="复制坐标"
                           @click="CopyToClickBoard(currentPosition.lng+','+currentPosition.lat)"/>
                    <span class="text-h6 font-bold" :class="analyseList.score>1000?'text-green':'text-red'"
                          v-if="analyseList.score!=null"> 最终得分：{{
                        analyseList.score
                      }}</span>
                  </div>
                  <div class="q-mt-md">
                    <div v-for="analyse in analyseList">
                      <q-expansion-item
                          v-if=" analyse.result != ''"
                          icon="travel_explore"
                          :label="analyse.name"
                          :caption="'得分:'+analyse.score"
                          :header-class="analyse.weight>0?'text-green':'text-red'"
                      >
                        <q-card>
                          <q-card-section>
                            <q-item clickable v-ripple v-for="result in analyse.result">
                              <q-item-section avatar>
                                <q-icon :color="result.weight>0?'primary':'red'"
                                        :name="result.weight>0?'verified':'new_releases'"/>
                              </q-item-section>
                              <q-item-section>

                                <div>
                                  <span>
                                  距离： {{ result.distance }}米
                                </span>
                                  <span>
                                  名称： {{ result.name }}
                                </span>
                                  <span>
                                  地址：{{ result.address }}
                                </span>
                                  <span>
                                  权重：{{ result.weight }}
                                </span>
                                  <span class="float-right">
                                  得分：{{ result.score }}
                                </span>
                                </div>
                              </q-item-section>
                            </q-item>
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>
                    </div>

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
import {AroundSearch, SortData, TransportData} from "components/calc";
import {useQuasar} from "quasar";
import {GD_JS_KEY} from "components/pwd";
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
const currentPosition = ref({"name": "石家庄市", lng: 0, lat: 0})
const positionSearchValue = ref({name: "石家庄市"})
const positionSearchResult = ref([])
const analyseList: any = ref([])
// X：纬度lat,Y：经度lng
//页面相关
const router = useRouter().currentRoute.value
const currentItem: any = ref({})
const currentUser = ref({})
const sort = ref({"name": "美食餐饮"})
const likeIds = ref([])
onMounted(() => {
  const router = useRouter().currentRoute.value
  loadPage()
})
const $q = useQuasar()

function loadPage() {
  getItemById(router.query.id)
  getSortById(router.query.id)
  getUserLikes()
  loadMap()
}

function loadMap() {
  AMapLoader.load({
    key: GD_JS_KEY,
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

    //绑定移动事件
    map.on('moveend', () => {
      var center = map.getCenter();
      currentPosition.value.lat = center.lat
      currentPosition.value.lng = center.lng
    });
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

function startAnalyse() {
  getSearchList()
}

function getSortById(id: any) {
  api.get("/sort/parentId?id=" + id).then((res: BaseApi) => {
    sort.value = res.data
  })
}

function getSearchList() {
  let data: any = []
  let code: number[] = []
  SortData.forEach((item) => {
    if (sort.value.name == item.name) {
      data = [...item.data]
    }
  })
  data.push(...TransportData)
  $q.loading.show({
    message: '请求APi并处理数据',
    boxClass: 'bg-grey-2 text-grey-9',
    spinnerColor: 'primary'
  })
  setTimeout(() => {
    const a = AroundSearch(data, currentPosition.value.lng, currentPosition.value.lat).then((res: any) => {
      analyseList.value = res
    })
    $q.loading.hide()
  }, 1000)
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