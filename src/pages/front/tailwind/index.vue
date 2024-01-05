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
                  <q-btn flat color="grey" class="q-ml-sm" dense round icon="add" @click.stop="handleDialogOpen"/>
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
                :label="item.name +' = '+item.value"
                :caption="item.format"
                header-class="text-primary text-bold text-subtitle1"
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
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-tab-panel>

          <!--     函数     -->
          <q-tab-panel name="fun" class="no-padding q-mt-md">
            <q-expansion-item
                v-for="item in codeFunction"
                expand-separator
                icon="functions"
                :label="`${item.functionName} (${item.paramsStr})`"
                header-class="text-primary text-bold text-subtitle1"
            >
              <q-card>
                <q-card-section class="q-pa-sm">
                  <div class="">
                    <q-input filled v-model="item.functionName" dense
                             class="w-full q-pr-sm"
                             label="名称"/>
                    <div v-for="(param,index) in item.params" class="w-full flex justify-between q-pt-md">
                      <q-input filled v-model="param.name" dense
                               class="w-1/2 q-pr-sm"
                               :label="'形参'+(index+1)"/>
                      <q-input filled v-model="param.type" dense
                               class="w-1/2 q-pr-sm"
                               :label="'类型'+(index+1)"/>
                    </div>
                  </div>
                  <div class="q-mt-md">
                    <q-input filled v-model="item.body" dense class=" q-pr-sm" label="函数体" autogrow/>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>

          </q-tab-panel>

          <!--     引入     -->
          <q-tab-panel name="import" class="no-padding q-mt-md">
            <q-expansion-item
                v-for="item in codeImport"
                expand-separator
                :icon="item.icon"
                :label="item.origin"
                header-class="text-primary text-bold text-subtitle1 "
            >
              <q-card>
                <q-card-section class="q-pa-sm">
                  <q-input filled v-model="item.items" dense
                           class="w-full"
                           label="Import"/>
                  <q-input filled v-model="item.path" dense
                           class="w-full q-pt-md"
                           label="Path"/>
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
  <!-- 弹窗 -->
  <q-dialog v-model="saveDialog">
    <q-card class="min-w-[1200px] w-4/5">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ saveTitle }}</div>
        <q-space/>
        <q-btn color="primary" flat label="保存" class="q-mr-md "/>
        <q-btn icon="close" flat round dense v-close-popup/>
      </q-card-section>
      <q-card-section class=" justify-around flex ">
        <div class="flex w-1/3 content-center">
          <q-input filled v-model="text" readonly dense label="Filled" class="w-fit q-mr-sm"/>
          <q-btn color="primary" icon="autorenew" label="更换" class=""/>
        </div>
        <div class="w-2/3">
          <q-select
              label="Css样式"
              filled
              dense
              v-model="modelAddUnique"
              use-input
              use-chips
              multiple
              hide-dropdown-icon
              input-debounce="0"
              new-value-mode="add-unique"
          />
        </div>
        <q-select
            label="Options"
            class="w-full q-mt-md"
            filled
            dense
            v-model="modelAddUnique"
            use-input
            use-chips
            multiple
            hide-dropdown-icon
            input-debounce="0"
            new-value-mode="add-unique"
        />
      </q-card-section>
      <q-separator/>
      <q-card-section class=" q-pa-md">
        <q-card class="border-2 no-shadow">
          <q-tabs
              v-model="tab"
              class="text-black text-base"
              active-color="primary"
              indicator-color="primary"
              align="justify"
          >
            <q-tab name="css" label="Css样式"/>
            <q-tab name="attribute" label="属性"/>
            <q-tab name="event" label="事件"/>
            <q-tab name="slot" label="插槽"/>
          </q-tabs>
          <q-separator/>

          <q-tab-panels v-model="tab" animated class="min-h-[300px]">
            <q-tab-panel name="css" class="q-pa-none">

              <q-splitter
                  v-model="splitterModel"
              >
                <template v-slot:before>
                  <q-tabs
                      v-model="innerTab"
                      vertical
                      class="text-primary"
                  >
                    <q-tab :name="css.name" :label="css.name" v-for="css in cssList"/>
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                      v-model="innerTab"
                      animated
                      transition-prev="slide-down"
                      transition-next="slide-up"
                  >
                    <q-tab-panel :name="css.name" class="flex" v-for="css in cssList">
                      <div v-for="child in css.children" class="w-full flex">
                        <div class="w-full">
                          {{ child.name }}
                        </div>
                        <q-item tag="label" v-ripple v-for="c in child.children" class="w-1/5 ">
                          <q-item-section avatar>
                            <q-checkbox v-model="color" val="orange" color="orange"/>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label>{{ c.value }}</q-item-label>
                            <q-item-label caption>{{ c.desc }}</q-item-label>
                          </q-item-section>
                        </q-item>
                      </div>
                    </q-tab-panel>

                    <q-tab-panel name="innerAlarms">
                      <div class="text-h4 q-mb-md">Alarms</div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                    </q-tab-panel>

                    <q-tab-panel name="innerMovies">
                      <div class="text-h4 q-mb-md">Movies</div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio
                        iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa
                        fuga nulla ullam. In, libero.</p>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>

              </q-splitter>
            </q-tab-panel>
            <q-tab-panel name="attribute">
              <div class="text-h6">Alarms</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
            <q-tab-panel name="event">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
            <q-tab-panel name="slot">
              <div class="text-h6">Movies</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </q-card-section>
    </q-card>
  </q-dialog>
  <span class="text-deep-orange q-mt-sm"></span>
</template>
<script lang="ts" setup>
import cheerio, {AnyNode, Cheerio, CheerioAPI} from 'cheerio';
import {ref, toRaw, watch} from "vue";
import axios from "axios";
import {CommonFail, CommonGroupFastSuccess} from "components/dialog";
import {CssList, cssList} from "pages/front/tailwind/struct";

const leftTab = ref('template') //选项卡
const codeEditable = ref('可编辑')
const refresh = ref(false)//刷新
let d_key: number = 0 //代码树的唯一id
let $: CheerioAPI = cheerio.load('')

const sourceCode = ref<string>("")
const codeTree: any = ref([]) //代码树
const codeVariable: any = ref([])
const codeFunction: any = ref([])
const codeImport: any = ref([])
watch(sourceCode, (n, o) => {
  if (o == null) {
    return
  }
  uploadCode()
}, {immediate: false})

getCode()

// 下载代码
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

// 上传代码
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

// 解析模板树
function parseTemplateTree(sourceCode: string) {
  const regex = /(?<=<template>)([\s\S]*?)(?=<\/template>)/
  const match = sourceCode.match(regex) as RegExpMatchArray
  $ = cheerio.load(match[0]);
  const template = $('body')
  codeTree.value = []
  cycleGetNode(template.children(), codeTree.value)
}

// 循环获取节点
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


//解析代码
function getScript(sourceCode: string) {
  const regex = /<script([\s\S]*?)<\/script>/
  const match = sourceCode.match(regex) as RegExpMatchArray
  parseVariables(match[0])
  parseFunction(match[0])
  parseImports(match[0])
}

// 解析变量
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

// 解析函数
function parseFunction(sourceCode: string) {
  codeFunction.value = []
  const regex = /function\s+(\w+)\s*\(([^)]*)\)\s*{([\s\S]*?)}/g;
  let match;
  while ((match = regex.exec(sourceCode)) !== null) {
    const functionName = match[1];
    let params: any = []
    let paramsStr = ""
    if (match[2] != "") {
      params = match[2].split(',').map(param => {
        var split = param.split(":");
        paramsStr += `${split[0]}:${split[1]},`
        return {name: split[0], type: split[1]}
      });
    }
    const body = match[3].trim()
    //去掉结尾逗号
    const i = paramsStr.lastIndexOf(",")
    if (i) {
      paramsStr = paramsStr.slice(0, i)
    }
    codeFunction.value.push({functionName, params, paramsStr, body});
  }
}

// 解析引入
function parseImports(sourceCode: string) {
  let regex = /import\s+{([^}]*)}\s+from\s+"([^"]+)";/g;
  let match;
  while ((match = regex.exec(sourceCode)) !== null) {
    const items = match[1].split(',').map(item => item.trim());
    const path = match[2];
    codeImport.value.push({origin: match[0], items: items, path: path, icon: 'account_tree'});
  }
  regex = /import\s+(\w+)\s+from\s+"([^"]+)";/g;
  while ((match = regex.exec(sourceCode)) !== null) {
    const items = match[1];
    const path = match[2];
    codeImport.value.push({origin: match[0], items: items, path: path, icon: 'streetview'});
  }
}

// 移除引号
function removeQuotes(str: string) {
  if (str.startsWith('"') && str.endsWith('"')) {
    return str.slice(1, -1);
  } else {
    return str;
  }
}

// 添加弹窗
const saveDialog = ref(false)
const saveTitle = ref('新增')

const cssList = CssList
const text = ref("")
const modelAddUnique = ref([])
const tab = ref('css')
const innerTab = ref(cssList[0].name)
const splitterModel = ref(15)

function handleDialogOpen() {
  saveTitle.value = "新增"
  saveDialog.value = true
}

function test() {

}
</script>
<style lang="sass" scoped>
.my-custom-toggle
  border: 1px solid #027be3
</style>