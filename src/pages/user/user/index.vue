<template>
  <div class="q-pa-md ">
    <div class="max-w-[1600px] m-auto">
      <q-card class="">
        <q-card-section>
          <div class="float-right">
            <q-btn label="退出登录" flat color="red" class="float-right"/>
          </div>
          <div class="flex">
            <q-btn round clas="w-1/5 q-mr-md">
              <q-avatar size="5rem">
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg"/>
              </q-avatar>
            </q-btn>
            <div class="q-ml-md flex content-between w-4/5">
              <div class="text-h6 font-bold w-full q-ml-sm">用户名</div>
              <div>
                <q-btn label="修改头像" flat color="primary" icon="account_circle" class="q-mr-md"/>
                <q-btn label="修改信息" flat color="primary" icon="edit" class="q-mr-md"/>
                <q-btn label="修改密码" flat color="primary" icon="vpn_key" class="q-mr-md"/>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="q-mt-lg ">

        <q-list bordered class="rounded-borders q-pa-md">
          <q-expansion-item
              default-opened
              expand-separator
              icon="schedule"
              label="浏览历史"
              header-class="text-primary text-lg"

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
              icon="star"
              label="我的收藏"
              header-class="text-secondary text-lg"
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
              icon="widgets"
              label="商户管理"
              header-class="text-purple text-lg"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-list>
      </q-card>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="sass">

</style>