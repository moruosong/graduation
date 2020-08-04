import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    redirect: '/Home',
    children:
    [
      {
        path: '/Home',
        name: 'Home',
        component: Home
      },
      {
        path: '/login',
        component: Login
      }
    ]
  }
  // {
  //   path: '/login',
  //   component: Login
  // }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/' || to.path === '/login') {
//     return next()
//   }
// })

export default router
