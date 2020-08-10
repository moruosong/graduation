import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Content100 from '@/views/components/Content100'
import Card100 from '@/views/components/Card100'
import './styles/element-variables.scss'
import axios from 'axios'
import '@/styles/index.scss' // global css

// import queryString from 'queryString'

Vue.config.productionTip = false
Vue.use(ElementUI)

// const http = axios.create({
//   baseURL:'http://localhost:8080/api',
//   timeout: 1000,
//   responseType:'json',
//   headers:{
//     'custome-header': 'miaov',
//     'content-type':'application/x-www-form-urlencoded'   //转换为key=value的格式必须增加content-type
//   },
//   transformRequest:[function(data){
//       console.log(data)
//     data.age = 30;  //发送之前增加的属性
//     return queryString.stringify(data);    //利用对应方法转换格式
//   }]
// })

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080/api'
axios.defaults.timeout = 1000
axios.defaults.headers = { 'Content-type': 'application/x-www-form-urlencoded' }
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  var querystring = require('querystring')
  config.data = querystring.stringify(config.data)
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  return response
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

Vue.component('content100', Content100)
Vue.component('card100', Card100)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
