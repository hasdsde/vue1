<template>
  <q-layout view="hHh Lpr fFf" class="">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          DD-Code管理系统
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="">
      <q-list padding class="rounded-borders text-primary">
        <q-expansion-item expand-separator v-for="(menu, key) of menus" :key="key" :icon="menu.icon" :label="menu.name">
          <q-item v-for="(child, index) in menu.children" :key="index" clickable v-ripple :to="child.url"
            :active="link === child.name" @click="link = 'home'" active-class="my-menu-link" class="text-black">
            <q-item-section avatar>
              <q-icon :name="child.icon" class="pl-5" />
            </q-item-section>
            <q-item-section>
              {{ child.name }}
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { BaseApi } from 'src/components/models';
import { ref } from 'vue';

const menus: any = ref([])
const leftDrawerOpen = ref(false)
const link = ref('')
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
loadMenu()

// 获取远程Menu
function loadMenu() {
  const menuMap: any = []
  let parentMenu: any = []
  let childrenMenu: any = []
  api.get("/menu/parent").then((parnet: BaseApi) => {

    parentMenu = parnet.data.map((p: any) => {
      return { id: p.id, url: p.url, icon: p.icon, name: p.name }
    })
    parentMenu.forEach((parent: any) => {
      menuMap[parent.id] = { ...parent, children: [] }
    })
    api.get("/menu/child").then((children: BaseApi) => {
      childrenMenu = children.data.map((c: any) => {
        return { id: c.id, url: c.url, icon: c.icon, name: c.name, parentId: c.parentId }
      })
      childrenMenu.forEach((child: any) => {
        menuMap[child.parentId].children.push(child)
      });
    })

    // 解决index问题
    menuMap.map((menu: any) => {
      menus.value.push(menu)
    });
  })


}
</script>
<style lang="scss">
.my-menu-link {
  color: black;
  background: #F2C037
}
</style>
