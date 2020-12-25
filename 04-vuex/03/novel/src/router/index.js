import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ranking.vue')

  },
  {
    path: '/book/:id',
    name: 'Book',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Book.vue'),
    children: [
      {
        path: '/',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
      },{
      path: 'chapter',
      name: 'Chapter',
      component: () => import(/* webpackChunkName: "about" */ '../views/Chapter.vue'),
    },{
      path: 'read',
      name: 'Read',
      component: () => import(/* webpackChunkName: "about" */ '../views/Read.vue'),
    }]

  }
]

const router = new VueRouter({
  routes
})

export default router
