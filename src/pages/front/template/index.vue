<!--@formatter:off-->
<template>
  <div id="div_id" class="first second" v-ripple="">
    <div class="q-pa-md">
      <div class="q-mt-md id_1">
        123{aaa}111
      </div>
      <div class="q-pa-md hahahaha">
        <div class="haha">aaa</div>
        <q-option-group :options="options" type="checkbox" v-model="group">
        </q-option-group>
      </div>
    </div>
    <q-btn color="primary" label="按钮" @click="handleClick"></q-btn>
    <div class="q-pa-md number">
      114514
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {CommonFail, CommonSuccess} from "components/dialog";
import axios from "axios";

const item = "aa"
const item2:string = "aaaa"
const group = ref([]);
const options = [{label: 'Battery', value: 'bat'},{label: 'Friend', value: 'friend', color: 'green'},{label: 'Picture', value: 'upload', color: 'red'}]
function handleClick() {
  CommonSuccess("ok"),
      CommonFail("aa")
  axios
 console.log("这里是函数体")
}
function getInput(input:number,input2:string){
  console.log("这里是函数体")
  return input+1
}
</script>

<style scoped lang="sass">

</style>