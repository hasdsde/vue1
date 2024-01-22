<template>
  <div class="q-pa-md flex">
    <q-card class="w-[40vw] max-w-[400px] q-mr-md">
      <q-card-section class="bg-primary">
        <span class="text-h6 text-white">环境配置</span>
      </q-card-section>

      <q-card-section class="flex justify-between ">
        <div class="flex w-full">
          <div class="">端口</div>
          <q-space></q-space>
          <div>
            {{ env.port }}
          </div>
        </div>
        <div class="flex w-full q-mt-sm">
          <div class="">Java版本</div>
          <q-space></q-space>
          <div>
            {{ env.javaVersion }}
          </div>
        </div>
        <div class="flex w-full q-mt-sm">
          <div class="">时区</div>
          <q-space></q-space>
          <div>
            {{ env.timeZone }}
          </div>
        </div>
        <div class="flex w-full q-mt-sm">
          <div class="">驱动</div>
          <q-space></q-space>
          <div>
            {{ env.driver }}
          </div>
        </div>
        <div class="flex w-full q-mt-sm">
          <div class="">连接池</div>
          <q-space></q-space>
          <div>
            {{ env.pool }}
          </div>
        </div>
      </q-card-section>

    </q-card>
    <q-card class="w-[40vw] max-w-[400px]">
      <q-card-section class="bg-purple">
        <span class="text-h6 text-white">系统监控</span>
      </q-card-section>

      <q-card-section class="flex justify-between ">
        <div class="flex w-full q-mt-sm justify-between">
          <div class="">JVM内存</div>
          <div class="w-[70%] vertical-bottom flex content-center">
            <q-linear-progress size="lg" stripe color="purple"
                               :value="(sys.jvm_memory_used / sys.jvm_memory_max).toFixed(2) as number"/>
          </div>
          <div>
            {{ (sys.jvm_memory_used / sys.jvm_memory_max).toFixed(2) * 100 }}%
          </div>
        </div>
        <div class="flex w-full q-mt-sm justify-between">
          <div class="">进程CPU</div>
          <div class="w-[70%] vertical-bottom flex content-center">
            <q-linear-progress size="lg" stripe color="purple"
                               :value="sys.process_cpu_usage.toFixed(2) as number"/>
          </div>
          <div>
            {{ sys.process_cpu_usage.toFixed(2) * 100 }}%
          </div>
        </div>
        <div class="flex w-full q-mt-sm justify-between">
          <div class="">系统CPU</div>
          <div class="w-[70%] vertical-bottom flex content-center">
            <q-linear-progress size="lg" stripe color="purple"
                               :value="sys.system_cpu_usage.toFixed(2) as number"/>
          </div>
          <div>
            {{ sys.system_cpu_usage.toFixed(2) * 100 }}%
          </div>
        </div>
      </q-card-section>
    </q-card>

  </div>

</template>
<script setup lang="ts">

import {api} from "boot/axios";
import {ref} from "vue";

loadPage()

function loadPage() {
  loadEnv()
  loadSys()
}

const env = ref({
  port: "0",
  javaVersion: "",
  timeZone: "",
  driver: "",
  pool: "",
})
const sys = ref({
  jvm_memory_max: 1,
  jvm_memory_used: 0,
  process_cpu_usage: 0,
  system_cpu_usage: 0,
})

function loadEnv() {
  api.get("/actuator/env").then((res: any) => {
    env.value.port = res.propertySources[0].properties["local.server.port"].value
    env.value.javaVersion = res.propertySources[2].properties["java.version"].value
    env.value.timeZone = res.propertySources[2].properties["user.timezone"].value
    env.value.driver = res.propertySources[4].properties["spring.datasource.driver-class-name"].value
    env.value.pool = res.propertySources[4].properties["spring.datasource.type"].value
  })
}

function loadSys() {
  api.get("/actuator/metrics/jvm.memory.max").then((res: any) => {
    sys.value.jvm_memory_max = res.measurements[0].value
  })
  api.get("/actuator/metrics/jvm.memory.used").then((res: any) => {
    sys.value.jvm_memory_used = res.measurements[0].value
  })
  api.get("/actuator/metrics/process.cpu.usage").then((res: any) => {
    sys.value.process_cpu_usage = res.measurements[0].value
  })
  api.get("/actuator/metrics/system.cpu.usage").then((res: any) => {
    sys.value.system_cpu_usage = res.measurements[0].value
  })
}
</script>