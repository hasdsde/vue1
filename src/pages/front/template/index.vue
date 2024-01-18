<template><div class="q-pa-sm" >
    <q-card class="q-pa-md" >
      <q-btn color="primary" label="刷新" icon="refresh" class="q-mr-md" ></q-btn>
      <q-btn color="secondary" label="新增" icon="add" class="q-mr-md" ></q-btn>
      <q-btn color="purple" label="修改" icon="update" class="q-mr-md" ></q-btn>
      <q-btn color="purple" class="q-mr-md" label="标记删除" icon="delete" ></q-btn>
      <q-btn color="red" label="删除" icon="delete" class="q-mr-md" ></q-btn>
    </q-card>
    <q-card class="q-mt-md" >
      <q-table :rows="rows" :columns="columns" hide-pagination="" class="" >
        <template v-slot:top="prop" >
          <q-btn color="red" label="删除2" icon="delete" class="q-mr-md" ></q-btn>
        
<q-input filled="" dense="" label="搜索内容" class="q-mr-md" ></q-input>
<q-btn flat="" icon="search" color="primary" class=""></q-btn></template>
      </q-table>

      <div class="" ></div>
    </q-card>
  </div>

</template><script setup lang="ts">
import {ref} from "vue"

const a :any = "abb";
const b :any = "abb";
const rows :any = ref([{
  "authorityKey": "authorityKey0",
  "createdAt": "createdAt0",
  "deletedAt": "deletedAt0",
  "description": "description0",
  "id": "id0",
  "name": "name0",
  "type": "type0",
  "updatedAt": "updatedAt0"
}, {
  "authorityKey": "authorityKey1",
  "createdAt": "createdAt1",
  "deletedAt": "deletedAt1",
  "description": "description1",
  "id": "id1",
  "name": "name1",
  "type": "type1",
  "updatedAt": "updatedAt1"
}, {
  "authorityKey": "authorityKey2",
  "createdAt": "createdAt2",
  "deletedAt": "deletedAt2",
  "description": "description2",
  "id": "id2",
  "name": "name2",
  "type": "type2",
  "updatedAt": "updatedAt2"
}, {
  "authorityKey": "authorityKey3",
  "createdAt": "createdAt3",
  "deletedAt": "deletedAt3",
  "description": "description3",
  "id": "id3",
  "name": "name3",
  "type": "type3",
  "updatedAt": "updatedAt3"
}, {
  "authorityKey": "authorityKey4",
  "createdAt": "createdAt4",
  "deletedAt": "deletedAt4",
  "description": "description4",
  "id": "id4",
  "name": "name4",
  "type": "type4",
  "updatedAt": "updatedAt4"
}, {
  "authorityKey": "authorityKey5",
  "createdAt": "createdAt5",
  "deletedAt": "deletedAt5",
  "description": "description5",
  "id": "id5",
  "name": "name5",
  "type": "type5",
  "updatedAt": "updatedAt5"
}, {
  "authorityKey": "authorityKey6",
  "createdAt": "createdAt6",
  "deletedAt": "deletedAt6",
  "description": "description6",
  "id": "id6",
  "name": "name6",
  "type": "type6",
  "updatedAt": "updatedAt6"
}, {
  "authorityKey": "authorityKey7",
  "createdAt": "createdAt7",
  "deletedAt": "deletedAt7",
  "description": "description7",
  "id": "id7",
  "name": "name7",
  "type": "type7",
  "updatedAt": "updatedAt7"
}, {
  "authorityKey": "authorityKey8",
  "createdAt": "createdAt8",
  "deletedAt": "deletedAt8",
  "description": "description8",
  "id": "id8",
  "name": "name8",
  "type": "type8",
  "updatedAt": "updatedAt8"
}, {
  "authorityKey": "authorityKey9",
  "createdAt": "createdAt9",
  "deletedAt": "deletedAt9",
  "description": "description9",
  "id": "id9",
  "name": "name9",
  "type": "type9",
  "updatedAt": "updatedAt9"
}]);
const columns :any = [{
  "name": "authorityKey",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "唯一名称",
  "field": "authorityKey"
}, {
  "name": "createdAt",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "createdAt",
  "field": "createdAt"
}, {
  "name": "deletedAt",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "deletedAt",
  "field": "deletedAt"
}, {
  "name": "description",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "描述",
  "field": "description"
}, {"name": "id", "align": "center", "required": true, "sortable": true, "label": "id", "field": "id"}, {
  "name": "name",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "名称",
  "field": "name"
}, {
  "name": "type",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "类型  0-前端 1-后端",
  "field": "type"
}, {
  "name": "updatedAt",
  "align": "center",
  "required": true,
  "sortable": true,
  "label": "updatedAt",
  "field": "updatedAt"
}];

</script>