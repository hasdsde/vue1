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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
