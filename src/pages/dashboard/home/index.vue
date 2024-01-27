<template>
  <div class="q-pa-md flex justify-around ">
    <q-card class="w-[40vw] h-[40vh]">
      <q-card-section class="h-1/6 q-pb-none bg-primary text-white">
        <span class="text-h6 ">
          用户活跃度
        </span>
      </q-card-section>
      <q-card-section class="w-full h-5/6">
        <div class="w-full h-full" ref="ActiveRef">
        </div>
      </q-card-section>
    </q-card>
    <q-card class="w-[40vw] h-[40vh]">
      <q-card-section class="h-1/6 q-pb-none bg-secondary text-white">
        <span class="text-h6 ">
          系统监控
        </span>
      </q-card-section>
      <q-card-section class="w-full h-5/6">
        <q-list>
          <q-item v-for="data in sysData" :key="data.name" class="q-my-sm" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="secondary" :name="data.icon"/>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ data.name }}：{{ data.total }}</q-item-label>
              <q-item-label caption lines="1">
                <span>{{ data.name }}昨日</span>
                <span v-if="data.status=='up'" class="text-red">新增{{ data.value }}</span>
                <span v-if="data.status=='down'" class="text-green">下降{{ data.value }}</span>
                <span v-if="data.status=='0'" class="text-green">不变</span>
              </q-item-label>
            </q-item-section>

            <q-item-section side>
              <span v-if="data.status=='up'" class="text-red">
              <q-icon color="red" size="md" name="keyboard_arrow_up"/>
              </span>
              <span v-if="data.status=='down'" class="text-red">
              <q-icon color="green" size="md" name="keyboard_arrow_down"/>
              </span>
              <span v-if="data.status=='0'" class="text-red">
              <q-icon color="red" size="md" name="minimize"/>
              </span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
    <q-card class="w-[40vw] h-[40vh] q-mt-md">
      <q-card-section class="h-1/6 q-pb-none bg-purple text-white">
        <span class="text-h6 ">
          服务端监控
        </span>
      </q-card-section>
      <q-card-section class="w-full h-5/6">
        <q-list>
          <q-item v-for="data in serverData" :key="data.name" class="q-my-sm flex" clickable v-ripple>
            <q-item-section avatar class="w-[5%]">
              <q-icon color="purple" :name="data.icon"/>
              <span>{{ data.name }}</span>
            </q-item-section>

            <q-item-section class="w-[60%]">
              <q-linear-progress
                  size="xl"
                  :value="data.value/data.total"
                  color="purple"
              />
            </q-item-section>

            <q-item-section side class="w-[10%]">
              <span>({{ data.value }}/{{ data.total }}){{ data.danwei }}</span>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
    <q-card class="w-[40vw] h-[40vh] q-mt-md">
      <q-card-section class="h-1/6 q-pb-none bg-primary text-white">
        <span class="text-h6 ">
          API调用监控
        </span>
      </q-card-section>
      <q-card-section class="w-full h-5/6">
        <div class="w-full h-full" ref="ApiRef">
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts";
import {onMounted, ref} from "vue";

const ActiveRef = ref()
const ApiRef = ref()
onMounted(() => {
  loadPge()
})

function loadPge() {
  loadActiveChart()
  loadApiChart()
}

const sysData = ref([
  {icon: "face", name: "用户总量", total: "21455", status: "up", value: "140"},
  {icon: "admin_panel_settings", name: "权限数量", total: "63", status: "down", value: "20"},
  {icon: "apartment", name: "部门数量", total: "146", status: "0", value: "0"},
  {icon: "list", name: "菜单数量", total: "23", status: "up", value: "1"},
  {icon: "account_circle", name: "角色数量", total: "4", status: "up", value: "1"},
  {icon: "wysiwyg", name: "日志数量", total: "11451", status: "up", value: "1919"},
])
const serverData = ref([
  {icon: "sim_card", name: "内存", total: 32, value: 13, danwei: "GB"},
  {icon: "memory", name: "CPU", total: 100, value: 16, danwei: "%"},
  {icon: "center_focus_strong", name: "硬盘", total: 1000, value: 356, danwei: "GB"},
])

function loadActiveChart() {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['发布', '注册', '登录', '浏览', '访问']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '发布',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '注册',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '登录',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '浏览',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '访问',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  const chart1 = echarts.init(ActiveRef.value)
  chart1.setOption(option)
  window.addEventListener('resize', function () {
    chart1.resize();
  });
}

function loadApiChart() {
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '20%']
    },
    visualMap: {
      type: 'piecewise',
      show: false,
      dimension: 0,
      seriesIndex: 0,
      pieces: [
        {
          gt: 1,
          lt: 3,
          color: 'rgba(0, 0, 180, 0.4)'
        },
        {
          gt: 5,
          lt: 7,
          color: 'rgba(0, 0, 180, 0.4)'
        }
      ]
    },
    series: [
      {
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
          color: '#5470C6',
          width: 5
        },
        markLine: {
          symbol: ['none', 'none'],
          label: {show: false},
          data: [{xAxis: 1}, {xAxis: 3}, {xAxis: 5}, {xAxis: 7}]
        },
        areaStyle: {},
        data: [
          ['2019-10-10', 200],
          ['2019-10-11', 560],
          ['2019-10-12', 750],
          ['2019-10-13', 580],
          ['2019-10-14', 250],
          ['2019-10-15', 300],
          ['2019-10-16', 450],
          ['2019-10-17', 300],
          ['2019-10-18', 100]
        ]
      }
    ]
  };
  const chart2 = echarts.init(ApiRef.value)
  chart2.setOption(option)
  window.addEventListener('resize', function () {
    chart2.resize();
  });
}
</script>
