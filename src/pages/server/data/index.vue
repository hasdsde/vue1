<template>
  <div class="q-pa-md flex justify-between align-middle">
    <q-card class="q-pa-sm  w-[49%] h-[40%]">
      <q-card-section class="flex">
        <span class=" text-h6">SQL监控</span>
        <q-space class=""></q-space>
        <q-btn-toggle v-model="sqlCard" spread
                      no-caps
                      toggle-color="primary"
                      color="white"
                      text-color="black" :options="sqlCardOption"
                      @update:model-value="loadChart1"
                      dense></q-btn-toggle>
      </q-card-section>
      <q-card-section class="w-[100%] h-[38vh]">
        <div ref="sqlCardRef" class="w-full h-full">
        </div>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-sm  box-content w-[49%] h-[46%]">
      <q-card-section class="flex">
        <span class=" text-h6">Web监控</span>
        <q-space class=""></q-space>
        <q-btn-toggle v-model="webCard" spread
                      no-caps
                      toggle-color="primary"
                      color="white"
                      text-color="black" :options="webCardOption"
                      @update:model-value="loadChart2"
                      dense></q-btn-toggle>
      </q-card-section>
      <q-card-section class="w-[100%] h-[38vh]">
        <div ref="webCardRef" class="w-full h-full">
        </div>
      </q-card-section>
    </q-card>

    <q-card class="q-pa-sm box-content w-[48%] h-[46%] q-mt-md ">
      <q-card-section class="flex">
        <span class=" text-h6">Web监控</span>
        <q-space class=""></q-space>
        <q-btn-toggle v-model="sessionCard" spread
                      no-caps
                      toggle-color="primary"
                      color="white"
                      text-color="black" :options="sessionCardOption"
                      @update:model-value="loadChart3"
                      dense></q-btn-toggle>
      </q-card-section>
      <q-card-section class="w-[100%] h-[38vh]">
        <div ref="sessionCardRef" class="w-full h-full">
        </div>
      </q-card-section>
    </q-card>


  </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
import {api} from "boot/axios";
import * as echarts from 'echarts';

const sqlCard: any = ref("ExecuteCount");
const sqlCardOption: any[] = [
  {label: '执行次数', value: 'ExecuteCount'},
  {label: '执行时间', value: 'TotalTime'},
  {label: '最长时间', value: 'MaxTimespan'},
];
const sqlCardRef = ref()
loadPage()

function loadSqlChart(yAxis: string[], data: string[]) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: "0%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      sort: 'data'
    },
    yAxis: {
      type: 'category',
      data: yAxis
    },
    series: [
      {
        name: '2012',
        type: 'bar',
        data: data
      }
    ]
  };
  const chart1 = echarts.init(sqlCardRef.value)
  chart1.setOption(option)
  window.addEventListener('resize', function () {
    chart1.resize();
  });
}

function loadChart1() {
  api.get("/druid/sql.json?orderBy=SQL&orderType=desc&page=1&perPageCount=1000000&=").then((res: any) => {
    const yAxis: string[] = []
    const data: string[] = []
    res.Content.forEach((item: any) => {
      yAxis.push(item.SQL.toString().replaceAll("  ", "").replaceAll("\n", "").slice(0, 20) + "...")
      data.push(item[sqlCard.value])
    })
    loadSqlChart(yAxis, data)
  }).catch((error) => {
    window.open("http://localhost:8080/druid/login.html")
  })
}


const webCard: any = ref("RequestCount");
const webCardOption: any[] = [
  {label: '请求次数', value: 'RequestCount'},
  {label: '请求时间', value: 'RequestTimeMillis'},
  {label: '最慢时间', value: 'RequestTimeMillisMax'},
];
const webCardRef = ref()

function loadWebChart(yAxis: string[], data: string[]) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: "0%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      sort: 'data'
    },
    yAxis: {
      type: 'category',
      data: yAxis
    },
    series: [
      {
        name: '2012',
        type: 'bar',
        data: data
      }
    ]
  };
  const chart2 = echarts.init(webCardRef.value)
  chart2.setOption(option)
  window.addEventListener('resize', function () {
    chart2.resize();
  });
}

function loadChart2() {
  api.get("/druid/weburi.json?orderBy=URI&orderType=desc&page=1&perPageCount=1000000&=").then((res: any) => {
    const yAxis: string[] = []
    const data: string[] = []
    res.Content.forEach((item: any) => {
      yAxis.push(item.URI)
      data.push(item[webCard.value])
    })
    loadWebChart(yAxis, data)
  })
}


const sessionCard: any = ref("JdbcExecuteCount");
const sessionCardOption: any[] = [
  {label: '请求次数', value: 'JdbcExecuteCount'},
  {label: '请求时间', value: 'JdbcExecuteTimeMillis'},
  {label: '最大并发', value: 'ConcurrentMax'},
];
const sessionCardRef = ref()

function loadSessionChart(yAxis: string[], data: string[]) {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: "0%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      sort: 'data'
    },
    yAxis: {
      type: 'category',
      data: yAxis
    },
    series: [
      {
        name: '2012',
        type: 'bar',
        data: data
      }
    ]
  };
  const chart3 = echarts.init(sessionCardRef.value)
  chart3.setOption(option)
  window.addEventListener('resize', function () {
    chart3.resize();
  });
}

function loadChart3() {
  api.get("/druid/websession.json?orderBy=&orderType=asc&page=1&perPageCount=1000000&").then((res: any) => {
    const yAxis: string[] = []
    const data: string[] = []
    res.Content.forEach((item: any) => {
      console.log(item)
      yAxis.push(item.RemoteAddress)
      data.push(item[sessionCard.value])
    })
    loadSessionChart(yAxis, data)
  })
}


function loadPage() {
  loadChart1()
  loadChart2()
  loadChart3()
}
</script>