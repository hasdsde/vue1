<template>
  <div class="q-pa-sm flex justify-around h-[95vh]">
    <q-card class="w-[20%]  q-pa-md ">
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
          <q-tab-panel name="template" class="no-padding q-mt-md">
            <q-tree
                :nodes="customize"
                node-key="label"
                default-expand-all
            >
              <template v-slot:default-header="prop">
                <div class="row items-center">
                  <q-icon :name="prop.node.icon || 'category'" color="orange" size="28px" class="q-mr-sm"/>
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
          <q-tab-panel name="vars" class="no-padding q-mt-md">
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
          <q-tab-panel name="fun" class="no-padding q-mt-md">
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
          <q-tab-panel name="import" class="no-padding q-mt-md">
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

    <q-card class="w-[58%] h-full">
      <q-card-section class="h-full">
        <iframe src="http://localhost:9000/#/template" frameborder="0" class="w-full h-full"/>
      </q-card-section>
    </q-card>

    <q-card class="w-[20%] h-full">
      <q-card-section class="">
        <div class="text-body1 q-pb-md">
          设置
        </div>
        <div class="flex no-wrap">
          <q-select filled dense v-model="reloadTime" :options="['1','2','3']" label="自动更新时间"
                    class="inline w-[150px] "/>
          <q-btn class="q-ml-md" color="primary" label="刷新" :loading="refresh" @click="getCode"
                 icon="cloud_download"/>
          <q-btn class="q-ml-md" color="secondary" label="更新" :loading="refresh" @click="uploadCode" icon="backup"/>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-body1 q-pb-md">
          代码预览
        </div>
        <q-input
            v-model="sourceCode"
            debounce="1000"
            filled
            type="textarea"
            class="overflow-auto"
            autogrow
        />
      </q-card-section>
    </q-card>
  </div>
</template>
<script lang="ts" setup>
import cheerio, {AnyNode, Cheerio, CheerioAPI} from 'cheerio';
import {ref, toRaw, watch} from "vue";
import axios from "axios";
import {CommonFail, CommonGroupFastSuccess} from "components/dialog";

const reloadTime = ref(1) //自动更新时间
const leftTab = ref('template') //选项卡
const sourceCode = ref<string>("")
const customize = [
  {
    label: 'div1',
    header: 'root',
    icon: 'folder',
    children: [
      {
        label: 'div2',
        icon: 'folder',
        header: 'generic',
        children: [
          {
            label: 'div3',
            header: 'generic',
            body: 'story',
            story: '点击修改这里的样式'
          },
          {
            label: 'Good recipe',
            body: 'story',
            story: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.'
          }
        ]
      },
      {
        label: 'BTN',
        header: 'generic',
        children: []
      }
    ]
  }
]
const refresh = ref(false) //刷新
const codeTree: any = ref([]) //代码树
let d_key = 0 //代码树的唯一id
let $: CheerioAPI = cheerio.load('')
watch(sourceCode, (n, o) => {
  if (o == null) {
    return
  }
  uploadCode()
}, {immediate: false})

getCode()

function getCode() {
  refresh.value = true
  axios.get("/twc/get", {timeout: 2000}).then((res: any) => {
    sourceCode.value = res.data
    getTemplateTree(res.data)
    getScript(res.data)
    refresh.value = false
  }).catch((e) => {
    CommonFail("错误：" + e.message)
  })

}

function uploadCode() {
  var data = new FormData;
  data.set("file", toRaw(sourceCode.value))
  axios.post("/twc/upload", data, {timeout: 2000}).then((res: any) => {
    if (res.status == 200) {
      CommonGroupFastSuccess("更新已完成")
    }
  }).catch((e) => {
    CommonFail("错误：" + e.message)
  })
}

function getTemplateTree(sourceCode: string) {
  const regex = /(?<=<template>)([\s\S]*?)(?=<\/template>)/
  const match = sourceCode.match(regex) as RegExpMatchArray
  $ = cheerio.load(match[0]);
  const template = $('body')
  // console.log($('.number').text())
  cycleGetNode(template.children(), codeTree.value)
  console.log("all", template.children())
  console.log("codeTree", codeTree.value)
  // console.log($('[d_key=4]').text().replaceAll("\n", "").replaceAll(" ", ""))
}

function cycleGetNode(node: Cheerio<AnyNode>, codeTree: any) {
  $(node).attr("d_key", String(d_key += 1))
  codeTree.push({name: $(node).get(0).name, attr: $(node).attr(), text: $(node).text().replaceAll("\n", "").replaceAll(" ", ""), children: []})
  console.log(codeTree.value)
  // console.log($(node).get(0))
  $(node).children().map((i, el) => {
    cycleGetNode($(el), codeTree[0].children)
  })
}


function getScript(sourceCode: string) {
  const regex = /<script([\s\S]*?)<\/script>/
  const match = sourceCode.match(regex) as RegExpMatchArray
  // console.log(match[0])
}
</script>
<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>