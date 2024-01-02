<template>
  <div id="div_id" class="first second" v-ripple="">
    <div class="q-pa-md">
      <div class="q-mt-md id_1">
        这是模板文件22222222222222222222222 {{ item }}
      </div>
      <div class="q-pa-md">
        <q-option-group
            :options="options"
            type="checkbox"
            v-model="group"
        />
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

const item = "aa"
const item2 = "aaaa"
const group = ref([]);
const options = [
  {label: 'Battery too low', value: 'bat'},
  {label: 'Friend request', value: 'friend', color: 'green'},
  {label: 'Picture uploaded', value: 'upload', color: 'red'}
]

function handleClick() {

}
</script>

<style scoped lang="sass">

</style>