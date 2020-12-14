import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import PlayList from "../views/PlayList.vue";
import Recommend from "../views/Recommend.vue";

Vue.use(VueRouter);

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/hot',
    //   name: 'Hot',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/Hot.vue')
    // },

    // {
    //   path: '/search',
    //   name: 'Search',
    //   component: Search
    // },

    {
      path: '/',
      redirect: '/home'
    },

    {
        path: "/home",
        name: "Home",
        component: Home,
        children: [
            { path: "/", name: "Recommend", component: Recommend },
            {
                path: "hot",
                name: "Hot",
                component: () =>
                    import(/* webpackChunkName: "about" */ "../views/Hot.vue"),
            },
            {
                path: "search",
                name: "Search",
                component: Search,
            },
        ],
    },
    {
        path: "/playlist",
        name: "PlayList",
        component: PlayList,
        // meta: { isHiddenNav: true }
    },
];

const router = new VueRouter({
    routes,
});

export default router;
