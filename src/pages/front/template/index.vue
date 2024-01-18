<template>
  <div id="div_id" class="first second" v-ripple="" d_key="13">
    <div class="" d_key="14"></div>
    <q-btn size="md" label="点击更新" color="red" icon="add" class="">
      <template v-slot:default="prop"></template>
    </q-btn>
    <div class="q-pa-md" d_key="16">
      <div class="q-mt-md id_1" d_key="17">
        123{aaa}111
      </div>
      <div class="q-pa-md hahahaha" d_key="18">
        <div class="haha" d_key="19">aaa</div>
        <q-option-group :options="options" type="checkbox" v-model="group" class="" d_key="20">
          <div d_key="21">2222</div>
        </q-option-group>
      </div>
    </div>
    <q-btn color="primary" label="按钮" @click="handleClick" class="" d_key="22"></q-btn>
    <div class="q-pa-md number" d_key="23">
      114514
    </div>
    <q-slider class="q-pa-xl" v-model="priceModel" color="green" markers="" :marker-labels="arrayMarkerLabel"
              label-always="" :label-value="priceLabel" switch-label-side="" switch-marker-labels-side="" snap=""
              :min="0" :max="3" d_key="24">

    </q-slider>
  </div>

</template>
<script setup lang="ts">
import {computed, ref} from "vue"
import {CommonFail, CommonSuccess} from "components/dialog"
import axios from "axios"

const item: string = "aa"
const item2: string = "aaaa"
const group: any = ref([]);
const orangeModel: any = ref(6)
const priceModel: any = ref(0)
const priceLabel: any = computed(() => ` ${arrayMarkerLabel[priceModel.value].label}`)
const arrayMarkerLabel: any = [{value: 0, label: 'sm'}, {value: 1, label: 'md'}, {value: 2, label: 'lg'}, {value: 3, label: 'xl'},]
const options: any = [{label: 'Battery', value: 'bat'}, {label: 'Friend', value: 'friend', color: 'green'}, {label: 'Picture', value: 'upload', color: 'red'}]

function handleClick() {
  CommonSuccess("ok")
  CommonFail("aa")

  axios

  console.log("这里是函数体")
}

function getInput(input: number, input2: string) {
  console.log("这里是函数体")

  return input + 1
}


</script>