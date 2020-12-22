import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import PlayList from "../views/PlayList.vue";
import Recommend from "../views/Recommend.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Recommend",
        component: Recommend,
        meta: { isShowNav: true },
    },
    {
        path: "/hot",
        name: "Hot",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Hot.vue"),
        meta: { isShowNav: true },
    },

    {
        path: "/search",
        name: "Search",
        component: Search,
        meta: { isShowNav: true },
    },
    //创建播放列表
    {
        path: "/playlist",
        name: "PlayList",
        component: PlayList,
    },
];

const router = new VueRouter({
    routes,
});

export default router;