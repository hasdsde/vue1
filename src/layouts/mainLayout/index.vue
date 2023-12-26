<template>
  <q-layout view="hHh Lpr fFf" class="">
    <!-- 导航栏 -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title>
          DD-Code管理系统
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- 侧栏 -->
    <q-drawer v-model="leftDrawerOpen" bordered class="">
      <q-list padding class="rounded-borders text-primary">
        <q-expansion-item expand-separator v-for="(menu, key) of menus" :key="key" :icon="menu.icon" :label="menu.name"
                          v-model="menu.expand" @click="handleCardExpand(menu.name)">
          <q-item v-for="(child, index) in menu.children" :key="index" clickable v-ripple :to="child.url"
                  :active="link === child.url" @click="link = child.url" active-class="my-menu-link" class="text-black">
            <q-item-section avatar>
              <q-icon :name="child.icon" class="pl-5"/>
            </q-item-section>
            <q-item-section>
              {{ child.name }}
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {api} from 'src/boot/axios';
import {BaseApi} from 'src/components/models';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const menuMap: any = []
let parentMenu: any = []
let childrenMenu: any = []
const menus: any = ref([])
const leftDrawerOpen = ref(true)
const link: any = ref('')
const route = useRoute()

// 收起侧栏
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

// 记忆侧栏开合
function handleCardExpand(name: any) {
  parentMenu.forEach((item: any) => {
    if (item.name == name) {
      item.expand = !item.expand
    }
  });
  localStorage.setItem("parentMenu", JSON.stringify(parentMenu))
}

// 根据路由获取link
(function getFocus() {
  link.value = route.path
  // 代码生成器时默认关闭
  if (link.value == "/front/tailwind") {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
}())

// 获取远程Menu
loadMenu()

function loadMenu() {
  if (localStorage.getItem("parentMenu") != null && localStorage.getItem("childrenMenu") != null) {
    parentMenu = JSON.parse(localStorage.getItem("parentMenu") as string)
    childrenMenu = JSON.parse(localStorage.getItem("childrenMenu") as string)
    parentMenu.forEach((parent: any) => {
      menuMap[parent.id] = {...parent, children: []}
    })
    childrenMenu.forEach((child: any) => {
      menuMap[child.parentId].children.push(child)
    });
    menuMap.map((menu: any) => {
      menus.value.push(menu)
    });
  } else {
    api.get("/menu/parent").then((parnet: BaseApi) => {

      parentMenu = parnet.data.map((p: any) => {
        return {id: p.id, url: p.url, icon: p.icon, name: p.name, expand: false}
      })
      localStorage.setItem("parentMenu", JSON.stringify(parentMenu))
      parentMenu.forEach((parent: any) => {
        menuMap[parent.id] = {...parent, children: []}
      })

      api.get("/menu/child").then((children: BaseApi) => {
        childrenMenu = children.data.map((c: any) => {
          return {id: c.id, url: c.url, icon: c.icon, name: c.name, parentId: c.parentId}
        })
        localStorage.setItem("childrenMenu", JSON.stringify(childrenMenu))
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
}
</script>
<style lang="scss">
.my-menu-link {
  color: black;
  background: #F2C037
}
</style>
