import { api } from 'src/boot/axios';
import { BaseApi } from 'src/components/models';
import { RouteRecordRaw, useRouter } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/mainLayout/index.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/menu', component: () => import('pages/menu/index.vue') },
      { path: '/home', component: () => import('pages/home/index.vue') },
      { path: '/icons', component: () => import('pages/icons/index.vue') },
    ],
  },
];

api.get("/menu/child").then((children: BaseApi) => {
  let childrenMenu: any[] = []
  childrenMenu = children.data.data.map((c: any) => {
    return { name: c.name, path: c.url, component: () => import('../pages' + c.url + '/index.vue') }
  })
  // console.log(childrenMenu);
  //@ts-ignore
  routes[0].children.push(...childrenMenu)
})

routes.push({
  path: '/:catchAll(.*)*',
  component: () => import('pages/ErrorNotFound.vue'),
})


export default routes;
