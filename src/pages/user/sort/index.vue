<template>
  <div class="q-pa-md ">
    <div class="max-w-[1600px] m-auto">
      <div class="q-ma-md w-[50%] m-auto flex justify-between  box-border border-sky-500 border-2">
        <q-input filled v-model="text" label="搜索店家" class="w-[80%] font-bold" clearable
                 color="primary"/>
        <q-btn square color="primary" icon="search" label="搜索" size="1rem" class="w-[20%]"/>
      </div>
      <q-card class="bg-grey-2 q-mt-lg">
        <q-card-section>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">全部分类：</div>
            <q-select filled label="全部分类" class="q-mr-md w-[200px]" dense :options="['a','b']"/>
            <q-select filled label="详细分类" class=" w-[200px]" dense :options="['a','b']"/>
          </div>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">经营模式：</div>
            <q-btn-toggle
                v-model="secondModel"
                spread
                class="my-custom-toggle"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="[
          {label: '全部', value: '全部'},
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
                v-model="secondModel"
                class="my-custom-toggle"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="[
                {label: '10天内', value: '10'},
                {label: '20天内', value: '20'},
                {label: '30天内', value: '30'},
                {label: '40天内', value: '40'},
                {label: '40天以上', value: '50'},
        ]"
            />
          </div>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">投资金额：</div>
            <q-btn-toggle
                v-model="secondModel"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="[
              {label: '5万元以内', value: '1'},
              {label: '5-10万元', value: '2'},
              {label: '10-20万元', value: '3'},
              {label: '20-30万元', value: '4'},
              {label: '40万元以上', value: '5'},
        ]"/>
          </div>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">加盟地区：</div>
            <q-select filled label="地区" class="q-mr-md w-[200px]" dense :options="['a','b']"/>
          </div>
          <div class="flex items-center q-mb-md">
            <div class="vertical-middle q-mr-md">员工要求：</div>
            <q-btn-toggle
                v-model="secondModel"
                no-caps
                unelevated
                toggle-color="primary"
                color="white"
                text-color="primary"
                :options="[
              {label: '1人', value: '1'},
              {label: '2人', value: '2'},
              {label: '3人', value: '3'},
              {label: '4人', value: '4'},
              {label: '4人以上', value: '5'},
        ]"
            />
          </div>
        </q-card-section>
      </q-card>

      <q-list class="q-mt-lg flex justify-between">
        <q-card class="w-[49%] flex bg-grey-1" v-ripple>
          <q-card-section class="w-1/2 overflow-hidden">
            <q-img fit="cover" height="220px"
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
        <q-card class="w-[49%] flex bg-grey-1" v-ripple>
          <q-card-section class="w-1/2 overflow-hidden">
            <q-img fit="cover" height="220px"
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

  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="sass">

</style>