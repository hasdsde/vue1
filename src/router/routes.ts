import { api } from 'src/boot/axios';
import { BaseApi } from 'src/components/models';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/mainLayout/index.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/menu', component: () => import('pages/menu/index.vue') },
      { path: '/home', component: () => import('pages/home/index.vue') },
      { path: '/icons', component: () => import('pages/icons/index.vue') },
      { path: '/table', component: () => import('pages/fontPage/table/index.vue') },
    ],
  },
];

let childrenMenu: any[] = []
api.get("/menu/child").then((children: BaseApi) => {
  childrenMenu = children.data.data.map((c: any) => {
    return { path: c.url, component: () => import('pages/' + c.url + '/index.vue') }
  })
  //@ts-ignore
  routes[0].children.push(...childrenMenu)
})

routes.push({
  path: '/:catchAll(.*)*',
  component: () => import('pages/ErrorNotFound.vue'),
})
console.log(routes)
// api.get("/menu/parent").then((parnet: BaseApi) => {
//   parentMenu = parnet.data.data.map((p: any) => {
//     return { id: p.id, url: p.url, icon: p.icon, name: p.name }
//   })
//   parentMenu.forEach((parent: any) => {
//     menuMap[parent.id] = { ...parent, children: [] }
//   })
//   api.get("/menu/child").then((children: BaseApi) => {
//     childrenMenu = children.data.map((c: any) => {
//       return { id: c.id, url: c.url, icon: c.icon, name: c.name, parentId: c.parentId }
//     })
//     childrenMenu.forEach((child: any) => {
//       menuMap[child.parentId].children.push(child)
//     });
//   })
// })

export default routes;
