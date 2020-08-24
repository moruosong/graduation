import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'
import BackStage from '../views/backstage/index.vue'
import MyInfo from '../views/backstage/myinfo/index.vue'
import ModifyName from '../views/backstage/myinfo/modifyName.vue'
import ModifyPassword from '../views/backstage/myinfo/modifyPassword.vue'
import User from '../views/backstage/user/index.vue'

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
      }
      // {
      //   path: '/login',
      //   component: Login
      // }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/backStage',
    component: BackStage,
    children: [
      {
        path: '/myInfo',
        component: MyInfo,
        children: [
          {
            path: '/modifyName',
            component: ModifyName
          },
          {
            path: '/modifyPassword',
            component: ModifyPassword
          }
        ]
      },
      {
        path: '/user',
        component: User
      }
    ]
  }
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
