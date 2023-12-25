<template>
  <div class="q-pa-md">
    <div class="q-pa-xs">
      <q-card class="flex q-pa-md">
        <q-space></q-space>
        <q-input class="w-5/12" borderless clearable filled debounce="500" v-model="filter" placeholder="使用英文搜索">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
        <q-space></q-space>
        <q-btn color="primary" icon-right="arrow_outward" label="Material Icon 官方" size="md"
               href="https://fonts.google.com/icons?icon.platform=android" target="_blank" class="q-mr-md"/>
        <q-btn color="secondary" icon-right="arrow_outward" label="Quasar icon文档"
               href="http://www.quasarchs.com/vue-components/icon" target="_blank"/>
      </q-card>
    </div>

    <q-table grid :rows="icons" :columns="columns" row-key="name" :filter="filter" class="q-mt-md"
             :rows-per-page-options="[20, 30, 50, 60, 100]" hide-header
             :pagination="{ sortBy: 'popularity', rowsPerPage: 60, descending: true }">

      <template v-slot:item="props">
        <div class="q-pa-xs col-md-1">
          <q-card class="q-pa-md">
            <div class=" text-center">
              <q-btn size="lg" round class="text-caption" flat color="primary" :icon="props.row.name"
                     @click="handleCopy(props.row.name)"/>
            </div>
            <div class="text-center">
              <q-btn flat color="primary ellipsis" :loading="loading" class="full-width" :label="props.row.name"
                     @click="handleCopy(props.row.name)">
              </q-btn>
            </div>
          </q-card>

        </div>
      </template>

    </q-table>
  </div>
</template>
<script setup lang="ts">
import icons from 'src/components/icons.json'
import {ref} from 'vue';
import {CopyToClickBoard} from "components/utils";

const loading = ref(false)
const filter = ref('')
const columns: any[] = [
  {
    name: 'name',
    required: true,
    label: '名称',
    align: 'left',
    field: "name",
    sortable: false
  },
  {name: 'popularity', align: 'center', label: '热度排序', field: 'popularity', sortable: true},
  {name: 'tags', label: '标签', field: 'tags', sortable: true},
  // { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
]

function handleCopy(name: string) {
  CopyToClickBoard(name)
}
</script>
