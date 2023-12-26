<template>
  <div class="q-pa-sm flex justify-around">
    <q-card class="w-[20%] h-full q-pa-md">
      <!--      <div class="q-pb-md">-->
      <!--        已连接-->
      <!--        <q-btn color="primary" label="Primary"/>-->
      <!--      </div>-->
      <div>
        <q-btn-toggle
            v-model="leftTab"
            spread
            class="my-custom-toggle"
            no-caps
            unelevated
            toggle-color="primary"
            color="white"
            text-color="primary"
            :options="[
          {label: '模板', value: 'template'},
          {label: '变量', value: 'vars'},
          {label: '函数', value: 'fun'},
          {label: '引入', value: 'import'},
        ]"
        />
        <q-tab-panels v-model="leftTab" animated>

          <!--     模板     -->
          <q-tab-panel name="template">
            <q-tree
                :nodes="customize"
                node-key="label"
                default-expand-all
            >
              <template v-slot:default-header="prop">
                <div class="row items-center">
                  <q-icon :name="prop.node.icon || 'share'" color="orange" size="28px" class="q-mr-sm"/>
                  <div class="text-weight-bold text-primary">{{ prop.node.label }}</div>
                </div>
              </template>

              <template v-slot:default-body="prop">
                <div v-if="prop.node.story">
                  <span class="text-weight-bold">This node has a story</span>: {{ prop.node.story }}
                </div>
                <span v-else class="text-weight-light text-black">This is some default content.</span>
              </template>
            </q-tree>
          </q-tab-panel>

          <!--    变量     -->
          <q-tab-panel name="vars">
            <q-expansion-item
                expand-separator
                icon="perm_identity"
                label="Account settings"
                caption="John Doe"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
                expand-separator
                icon="signal_wifi_off"
                label="Wifi settings"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-tab-panel>

          <!--     函数     -->
          <q-tab-panel name="fun">
            <q-expansion-item
                expand-separator
                icon="perm_identity"
                label="Account settings"
                caption="John Doe"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
                expand-separator
                icon="signal_wifi_off"
                label="Wifi settings"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-tab-panel>

          <!--     引入     -->
          <q-tab-panel name="import">
            <q-expansion-item
                expand-separator
                icon="perm_identity"
                label="Account settings"
                caption="John Doe"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
                expand-separator
                icon="signal_wifi_off"
                label="Wifi settings"
            >
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                  commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                  eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-card>
    <q-card class="w-[58%] h-full ">
      <q-card-section>
        <iframe src="http://localhost:9000/#/template" frameborder="0"></iframe>
      </q-card-section>
    </q-card>
    <q-card class="w-[20%] h-full">
      <q-card-section>
        <div>
          设置
        </div>
        <q-select filled dense v-model="model" :options="['1','2','3']" label="自动更新时间"/>
        <q-btn color="primary" label="重新加载"/>
      </q-card-section>

      <q-card-section>
        代码预览：
        <q-input
            v-model="text"
            filled
            type="textarea"
        />
      </q-card-section>
    </q-card>

  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

// const fs = require('fs')

const leftTab = ref('template')
const customize = [
  {
    label: 'Satisfied customers',
    header: 'root',
    children: [
      {
        label: 'Good food',
        icon: 'restaurant_menu',
        header: 'generic',
        children: [
          {
            label: 'Quality ingredients',
            header: 'generic',
            body: 'story',
            story: 'Lorem ipsum dolor sit amet.'
          },
          {
            label: 'Good recipe',
            body: 'story',
            story: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.'
          }
        ]
      },
      {
        label: 'Good service',
        header: 'generic',
        body: 'toggle',
        caption: 'Why are we as consumers so captivated by stories of great customer service? Perhaps it is because...',
        enabled: false,
        children: [
          {label: 'Prompt attention'},
          {label: 'Professional waiter'}
        ]
      },
      {
        label: 'Pleasant surroundings',
        children: [
          {label: 'Happy atmosphere'},
          {label: 'Good table presentation', header: 'generic'},
          {label: 'Pleasing decor'}
        ]
      }
    ]
  }
]
</script>
<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>