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
import ImageManage from '../views/backstage/imageManage/index.vue'
import News from '../views/backstage/news/index.vue'
import Notices from '../views/backstage/notices/index.vue'
import AboutUs from '../views/aboutus/index.vue'
import Survey from '../views/survey/index.vue'
import Business from '../views/business/index.vue'
import Culture from '../views/culture/index.vue'
import ShowNews from '../views/news/index.vue'
import Contact from '../views/contact/index.vue'
import Ability from '../views/ability/index.vue'
import Joinus from '../views/joinus/index.vue'
import Recruit from '../views/backstage/recruit/index.vue'

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
        path: '/aboutus',
        name: 'AboutUs',
        component: AboutUs
      },
      {
        path: '/survey',
        name: 'Survey',
        component: Survey
      },
      {
        path: '/business',
        name: 'Business',
        component: Business
      },
      {
        path: '/culture',
        name: 'Culture',
        component: Culture
      },
      {
        path: '/shownews',
        name: 'ShowNews',
        component: ShowNews
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: '/ability',
        name: 'Ability',
        component: Ability
      },
      {
        path: '/joinus',
        name: 'Joinus',
        component: Joinus
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
      },
      {
        path: '/image',
        component: ImageManage
      },
      {
        path: '/news',
        component: News
      },
      {
        path: '/notices',
        component: Notices
      },
      {
        path: '/recruit',
        component: Recruit
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
