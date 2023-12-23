import { api } from 'src/boot/axios';
import { BaseApi } from 'src/components/models';
import { RouteRecordRaw, useRouter } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: "main",
    path: '/',
    component: () => import('layouts/mainLayout/index.vue'),
    children: [
      { path: '', redirect: '/dashboard/home' },
      { path: '/server/schedule', component: () => import('pages/server/schedule/index.vue') },
      { path: '/server/log', component: () => import('pages/server/log/index.vue') },
      { path: '/server/data', component: () => import('pages/server/data/index.vue') },
      { path: '/front/table', component: () => import('pages/front/table/index.vue') },
      { path: '/front/func', component: () => import('pages/front/func/index.vue') },
      { path: '/front/icon', component: () => import('pages/front/icon/index.vue') },
      { path: '/front/tailwind', component: () => import('pages/front/tailwind/index.vue') },
      { path: '/sys/menu', component: () => import('pages/sys/menu/index.vue') },
      { path: '/sys/dept', component: () => import('pages/sys/dept/index.vue') },
      { path: '/sys/authority', component: () => import('pages/sys/authority/index.vue') },
      { path: '/sys/user', component: () => import('pages/sys/user/index.vue') },
      { path: '/dashboard/home', component: () => import('pages/dashboard/home/index.vue') },

    ],
  },
];

api.get("/menu/child").then((children: BaseApi) => {
  let childrenMenu: any[] = []
  childrenMenu = children.data.data.map((c: any) => {
    return { name: c.name, path: c.url, component: () => import('../pages' + c.url + '/index.vue') }
  })
  //@ts-ignore
  routes[0].children.push(...childrenMenu)
})

routes.push({
  path: '/:catchAll(.*)*',
  component: () => import('pages/ErrorNotFound.vue'),
})


export default routes;
