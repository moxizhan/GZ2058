import Vue from "vue";
import VueRouter from "vue-router";
import Find from "../views/Find.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Find",
    meta: { showNav: true },
    component: Find
  },
  {
    path: "/cate",
    name: "Cate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { showNav: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cate.vue")
  },
  {
    path: "/me",
    name: "Me",
    meta: { showNav: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Me.vue")
  },
  {
    path: "/post",
    name: "Post",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Post.vue")
  },
  {
    path: "/catelist",
    name: "CateList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CateList.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
