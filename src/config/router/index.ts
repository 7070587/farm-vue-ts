import { Vue } from 'vue-property-decorator';
import VueRouter, { RouteConfig } from 'vue-router';
import { WebPagePath } from '@/config';

// 此VueRouter是自己自定義引入暴露出來的，即是自定義的，以下的VueRouter同樣是這樣
// 解決兩次訪問相同路由地址報錯
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

//#region import component
//#region Home
const Home = async () => {
    return (await import(/* webpackChunkName: "chunk_Home" */ '@/views/home')).Home;
};
//#endregion
//#endregion import component

let title: string = require('@/vue.config').pages.title;

let routes: Array<RouteConfig> = [];

routes = [
    //#region Overview
    {
        path: WebPagePath.Home,
        name: 'Home',
        component: Home,
        meta: { title: `${title}-Home` },
    },
    //#endregion

    {
        path: '*',
        redirect: { name: 'Home' },
    },
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(async (to, from, next) => {
    next();
});

router.afterEach((to, from) => {
    window.document.title = to.meta.title;
});

export default router;
