import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        // name: "main",
        path: '/',
        component: () => import('layouts/mainLayout/index.vue'),
        children: [
            {path: '', redirect: '/home'},
            {path: '/dashboard/home', component: () => import('pages/dashboard/home/index.vue')},
            //服务端页
            {path: '/server/schedule', component: () => import('pages/server/schedule/index.vue')},
            {path: '/server/log', component: () => import('pages/server/log/index.vue')},
            {path: '/server/data', component: () => import('pages/server/data/index.vue')},
            // 前端页
            {path: '/server/system', component: () => import('pages/server/system/index.vue')},
            {path: '/front/table', component: () => import('pages/front/table/index.vue')},
            {path: '/front/func', component: () => import('pages/front/func/index.vue')},
            {path: '/front/icon', component: () => import('pages/front/icon/index.vue')},
            {path: '/front/echart', component: () => import('pages/front/echart/index.vue')},
            // 系统管理
            {path: '/sys/menu', component: () => import('pages/sys/menu/index.vue')},
            {path: '/sys/dept', component: () => import('pages/sys/dept/index.vue')},
            {path: '/sys/authority', component: () => import('pages/sys/authority/index.vue')},
            {path: '/sys/user', component: () => import('pages/sys/user/index.vue')},
            {path: '/sys/role', component: () => import('pages/sys/role/index.vue')},
            // 内容页
            {path: '/content/brand', component: () => import('pages/content/brand/index.vue')},
            {path: '/content/sort', component: () => import('pages/content/sort/index.vue')},
            {path: '/content/file', component: () => import('pages/content/file/index.vue')},
            {path: '/content/banner', component: () => import('pages/content/banner/index.vue')},
            //用户页
            {path: '/home', component: () => import('pages/user/home/index.vue')},
            {path: '/brand', component: () => import('pages/user/brand/index.vue')},
            {path: '/location', component: () => import('pages/user/location/index.vue')},
            {path: '/sort', component: () => import('pages/user/sort/index.vue')},
            {path: '/user', component: () => import('pages/user/user/index.vue')},
            //
            //特殊文件：代码生成器
            {path: '/front/tailwind', component: () => import('pages/front/tailwind/index.vue')},
        ],
    },
];


let childrenMenu: any[] = []
// 该代码在firefox中不可用
// if (localStorage.getItem("childrenMenu") !== null) {
//     childrenMenu = JSON.parse(localStorage.getItem("childrenMenu") as string)
//     // @ts-ignore
//     routes[0].children.push(...childrenMenu.map((c: any) => {
//         return {name: c.name, path: c.url, component: () => import('../pages' + c.url + '/index.vue')}
//     }))
// } else {
//     api.get("/menu/child").then((children: BaseApi) => {
//         //@ts-ignore
//         routes[0].children.push(...children.data.data.map((c: any) => {
//             return {name: c.name, path: c.url, component: () => import('../pages' + c.url + '/index.vue'), meta: c.name}
//         }))
//     })
// }

routes.push(
    {
        path: '/login',
        component: () => import('layouts/login/index.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
    {
        path: '/template', component: () => import('pages/front/template/index.vue')
    },
)


export default routes;
