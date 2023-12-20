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
        <q-expansion-item expand-separator icon="perm_identity" label="仪表盘">
          <q-card class="text-black">
            <q-item clickable v-ripple to="/home" :active="link === 'home'" @click="link = 'home'"
              active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="inbox" class="pl-5" />
              </q-item-section>

              <q-item-section>
                首页
              </q-item-section>
            </q-item>

          </q-card>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="perm_identity" label="系统管理">
          <q-card class="text-black">
            <q-item clickable v-ripple :active="link === 'inbox'" @click="link = 'inbox'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="inbox" class="pl-5" />
              </q-item-section>

              <q-item-section>
                用户管理
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple :active="link === 'juese'" @click="link = 'juese'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="send" class="pl-5" />
              </q-item-section>

              <q-item-section>角色管理</q-item-section>
            </q-item>

            <q-item clickable v-ripple :active="link === 'quanxian'" @click="link = 'quanxian'"
              active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="delete" class="pl-5" />
              </q-item-section>

              <q-item-section>权限管理</q-item-section>
            </q-item>
            <q-item clickable v-ripple :active="link === 'dept'" @click="link = 'dept'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="delete" class="pl-5" />
              </q-item-section>

              <q-item-section>部门管理</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/menu" :active="link === 'menu'" @click="link = 'menu'"
              active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="delete" class="pl-5" />
              </q-item-section>

              <q-item-section>菜单管理</q-item-section>
            </q-item>
          </q-card>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="perm_identity" label="前端工具">
          <q-card class="text-black">
            <q-item clickable v-ripple :active="link === 'inbox'" @click="link = 'inbox'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="inbox" class="pl-5" />
              </q-item-section>

              <q-item-section>
                tailWind生成器
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple :active="link === 'outbox'" @click="link = 'outbox'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="send" class="pl-5" />
              </q-item-section>

              <q-item-section>Material Icon</q-item-section>
            </q-item>

            <q-item clickable v-ripple :active="link === 'trash'" @click="link = 'trash'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="delete" class="pl-5" />
              </q-item-section>

              <q-item-section>函数调用指南</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/table" :active="link === 'trash'" @click="link = 'trash'"
              active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="delete" class="pl-5" />
              </q-item-section>

              <q-item-section>表格列配置工具</q-item-section>
            </q-item>
          </q-card>
        </q-expansion-item>
        <q-expansion-item expand-separator icon="perm_identity" label="服务端工具">
          <q-card class="text-black">
            <q-item clickable v-ripple :active="link === 'inbox'" @click="link = 'inbox'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="inbox" class="pl-5" />
              </q-item-section>

              <q-item-section>
                系统API
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple :active="link === 'outbox'" @click="link = 'outbox'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="send" class="pl-5" />
              </q-item-section>

              <q-item-section>代码生成器</q-item-section>
            </q-item>

            <q-item clickable v-ripple :active="link === 'trash'" @click="link = 'trash'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="delete" class="pl-5" />
              </q-item-section>

              <q-item-section>数据监控</q-item-section>
            </q-item>
            <q-item clickable v-ripple :active="link === 'trash'" @click="link = 'trash'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="delete" class="pl-5" />
              </q-item-section>

              <q-item-section>日志监控</q-item-section>
            </q-item>
            <q-item clickable v-ripple :active="link === 'trash'" @click="link = 'trash'" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="delete" class="pl-5" />
              </q-item-section>

              <q-item-section>定时任务</q-item-section>
            </q-item>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false)
const link = ref('')
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<style lang="scss">
.my-menu-link {
  color: black;
  background: #F2C037
}
</style>
