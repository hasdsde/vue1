<template><div id="div_id" class="first second" v-ripple="" d_key="37">
<div class="" d_key="38"></div>
<q-btn size="md" label="更新4" color="red" icon="add" class="" d_key="39"></q-btn>
    <div class="q-pa-md" d_key="40">
      <div class="q-mt-md id_1" d_key="41">
        123{aaa}111
      </div>
      <div class="q-pa-md hahahaha" d_key="42">
        <div class="haha" d_key="43">aaa</div>
        <q-option-group :options="options" type="checkbox" v-model="group" d_key="44">
          <div d_key="45">2222</div>
        </q-option-group>
      </div>
    </div>
    <q-btn color="primary" label="按钮" @click="handleClick" class=""></q-btn>
    <div class="q-pa-md number" d_key="47">
      114514
    </div>
    <q-slider class="q-pa-xl" v-model="priceModel" color="green" markers="" :marker-labels="arrayMarkerLabel" label-always="" :label-value="priceLabel" switch-label-side="" switch-marker-labels-side="" snap="" :min="0" :max="3" d_key="48">
      
    </q-slider>
  </div>

</template>
<script setup lang="ts">
import {computed,ref} from "vue"
import {CommonFail,CommonSuccess} from "components/dialog"
import axios from "axios"

const item :string = "aa"
const item2 :string = "aaaa"
const group :any = ref([]);
const orangeModel :any = ref(6)
const priceModel :any = ref(0)
const priceLabel :any = computed(() => ` ${arrayMarkerLabel[priceModel.value].label}`)
const arrayMarkerLabel :any = [{value: 0, label: 'sm'}, {value: 1, label: 'md'}, {value: 2, label: 'lg'}, {value: 3, label: 'xl'},]
const options :any = [{label: 'Battery', value: 'bat'}, {label: 'Friend', value: 'friend', color: 'green'}, {label: 'Picture', value: 'upload', color: 'red'}]

function handleClick(){
  CommonSuccess("ok")
  CommonFail("aa")

  axios

  console.log("这里是函数体")
}

function getInput(input: number, input2: string){
  console.log("这里是函数体")

  return input + 1
}


</script>