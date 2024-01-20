<template>
  <div class="q-pa-md main h-screen bg-login-bg bg-cover ">
    <!--   背景图片   -->
    <!--    <BackgroundImg />-->
    <div class="flex justify-center align-middle h-full content-center ">

      <div class="flex max-h-[500px] w-[1000px] shadow-2 q-pa-sm bg-white rounded ">
        <div class="w-4/6 bg-login-bg bg-cover rounded-borders ">
        </div>
        <q-card class="q-pa-md no-shadow w-2/6">

          <q-card-section class="row justify-between">
            <p class="op-font text-h6">登录</p>
            <q-btn icon="close" dense rounded flat to="/"/>
          </q-card-section>

          <q-card-section>
            <q-input rounded ref="usernameRef" v-model="name" label="用户名" :lazy-rules="true"
                     :rules="[(val) => (val.length > 0) || '输入值为空']"/>
            <q-input rounded ref="passwordRef" v-model="password" label="密码" lazy-rules
                     :rules="[(val) => (val && val.length > 0) || '输入值为空']" type="password"/>
          </q-card-section>

          <q-card-section>
            <q-btn-group class="w-full">
              <q-btn @click="handleLogin" color="primary" class="w-3/4" label="登录"/>
              <q-btn @click="handleRegister" color="secondary" class="w-1/4" label="注册"/>
            </q-btn-group>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {api} from 'src/boot/axios';
import {CommonFail, CommonSuccess, CommonWarn} from 'src/components/dialog';
import {ref} from 'vue'
import {useRouter} from 'vue-router'


const $router = useRouter()

// 账号 密码 确认密码 三件套
const usernameRef = ref(null)
const passwordRef = ref(null)
const passwordConformRef = ref(null)


const name = ref('')
const password = ref('')
const registerMode = ref(false)


// 重置输入框
function clearAll() {
  name.value = ''
  password.value = ''

}


// 注册
function handleRegister() {
  CommonWarn('不可用')
}

//登录
async function handleLogin() {
  await api.post('/user/login', {
    'userName': name.value,
    'password': password.value
  }).then((res: any) => {
    if (res.code == '200') {
      CommonSuccess("登录成功")
      localStorage.clear()
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
      $router.push('/')
    } else {
      CommonFail(res.msg)
    }
  })
}


</script>


<style scoped>
.main {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
