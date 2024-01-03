<!--@formatter:on-->
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
                :nodes="codeTree"
                node-key="d_key"
                default-expand-all
            >
              <template v-slot:default-header="prop">
                <div class="row items-center ">
                  <q-icon :name="prop.node.icon || 'category'" color="orange" size="28px" class="q-mr-sm"/>
                  <div class="text-weight-bold text-primary">{{ prop.node.label.toString().toUpperCase() }}</div>
                </div>
                <q-space></q-space>
                <div class="float-right">
                  <q-btn flat color="grey" class="q-ml-sm" dense round icon="add" @click.stop="test"/>
                  <q-btn flat color="grey" class="q-ml-sm" dense round icon="edit" @click.stop="test"/>
                  <q-btn flat color="grey" class="q-ml-sm" dense round icon="close" @click.stop="test"/>
                </div>
              </template>

              <template v-slot:default-body="prop">
                <span v-for="(value,key) in prop.node.attr">
                  <q-badge v-if="key=='id'" color="orange" class="q-mr-sm">
                    {{ key + " : " + value }}
                  </q-badge>
                  <q-badge v-else-if="key=='class'" color="primary" class="q-mr-sm">
                    {{ key + " : " + value }}
                  </q-badge>
                  <!--        忽略key          -->
                  <span v-else-if="key=='d_key'" color="primary" class="q-mr-sm">
                  </span>
                  <q-badge v-else color="secondary" class="q-mr-sm">
                    {{ key + " : " + value }}
                  </q-badge>
                </span>
                <span v-if="prop.node.text!=''" class="text-weight-light text-black">文本：{{ prop.node.text }}</span>

              </template>
            </q-tree>
          </q-tab-panel>

          <!--    变量     -->
          <q-tab-panel name="vars" class="no-padding q-mt-md">
            <!--            radio_button_checked-->
            <q-expansion-item
                v-for="item in codeVariable"
                expand-separator
                :icon="item.ref?'motion_photos_on':'radio_button_checked'"
                :label="item.name"
                :caption="item.format"
                header-class="text-primary text-bold"
            >
              <q-card class="no-padding">
                <q-card-section class="q-pa-sm">
                  <div class="flex justify-between">
                    <q-select filled v-model="item.modifier" dense :options="['const','let','var']"
                              class="w-1/3 q-pr-sm"
                              label="修饰符"/>
                    <q-input filled v-model="item.name" dense
                             class="w-1/3 q-pr-sm"
                             label="变量名"/>
                    <q-input filled v-model="item.format" dense :options="['const','let','var']"
                             class="w-1/3 q-pr-sm"
                             label="类型"/>
                  </div>
                  <div class="q-mt-md">
                    <q-input filled v-model="item.value" dense class=" q-pr-sm" label="值" autogrow/>
                  </div>
                  <!--                  <q-select filled v-model="model" :options="options" label="Filled" />-->
                  <!--                  <q-select filled v-model="model" :options="options" label="Filled" />-->
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
                icon="adjust"
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
          <q-btn class="q-ml-md" color="primary" label="刷新" :loading="refresh" @click="getCode"
                 icon="cloud_download"/>
          <q-btn class="q-ml-md" color="secondary" label="更新" :loading="refresh" @click="uploadCode" icon="backup"/>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="text-body1 q-pb-md flex justify-between items-center">
          <span class="text-md">
            代码预览
          </span>
          <q-toggle
              class="text-sm vertical-top float-right"
              :label="codeEditable"
              color="primary"
              false-value="不可编辑"
              true-value="可编辑"
              v-model="codeEditable"
          />
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

const fab1 = ref(false)
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
        children: [
          {
            label: 'div3',
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
const codeEditable = ref('可编辑')
const refresh = ref(false)//刷新
const codeTree: any = ref([]) //代码树
let d_key: number = 0 //代码树的唯一id
let $: CheerioAPI = cheerio.load('')
const codeVariable: any = ref([])

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
    parseTemplateTree(res.data)
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

function parseTemplateTree(sourceCode: string) {
  const regex = /(?<=<template>)([\s\S]*?)(?=<\/template>)/
  const match = sourceCode.match(regex) as RegExpMatchArray
  $ = cheerio.load(match[0]);
  const template = $('body')
  codeTree.value = []
  cycleGetNode(template.children(), codeTree.value)
}

function cycleGetNode(node: Cheerio<AnyNode>, codeTree: any) {
  $(node).attr("d_key", String(d_key += 1))
  codeTree.push({
        //@ts-ignore
        label: $(node).get(0).name,
        attr: $(node).attr(),
        children: [],
        d_key: d_key,
        //@ts-ignore
        icon: $(node).get(0).name == "div" ? 'folder' : 'category',
        text: $(node).children().length == 0 ? $(node).text().replaceAll("\n", "").replaceAll(" ", "") : ''
      }
  )
  $(node).children().map((i, el) => {
    cycleGetNode($(el), codeTree[0].children)
  })
}

function test() {

}

function getScript(sourceCode: string) {
  const regex = /<script([\s\S]*?)<\/script>/
  const match = sourceCode.match(regex) as RegExpMatchArray
  parseVariables(match[0])
  parseFunction(match[0])
}

function parseVariables(sourceCode: string) {
  const regex = /(const|let|var)\s+(.+?)(?::(\w+))?\s*=\s*(.*)/g;
  let match = sourceCode.match(regex);
  while ((match = regex.exec(sourceCode)) !== null) {
    const modifier = match[1];
    const variableName = match[2];
    const format = match[3];
    const value = match[4].trim();

    codeVariable.value.push({
      name: variableName,
      modifier: modifier,
      format: format,
      value: removeQuotes(value),
      ref: value.includes("ref")
    });
  }
}

function parseFunction(sourceCode: string) {
  const regex = /function\s+(\w+)\s*\(([^)]*)\)\s*{([\s\S]*)}/;
  let match = sourceCode.match(regex);
  // while ((match = regex.exec(sourceCode)) !== null) {
  //   console.log(match)
  //
  // }
  // if (match) {
  //   const functionName = match[1];
  //   const params = match[2].split(',').map(param => param.trim());
  //   const body = match[3];
  //   return {functionName, params, body};
  // }
}

function removeQuotes(str: string) {
  if (str.startsWith('"') && str.endsWith('"')) {
    return str.slice(1, -1);
  } else {
    return str;
  }
}
</script>
<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>