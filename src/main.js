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
import BaiduMap from 'vue-baidu-map'

// import queryString from 'queryString'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.use(BaiduMap, { ak: 'BjRWoNr9jEAonG7bmNs2eqiGpZxo6Pbv' })

Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://localhost:8888/api'
axios.defaults.baseURL = 'http://82.156.27.63:8888/api'
axios.defaults.timeout = 5000
// axios.defaults.headers = { 'Content-type': 'application/x-www-form-urlencoded' }
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  const token = window.sessionStorage.getItem('token')
  if (token) {
    config.headers.token = token
  }
  if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    var querystring = require('querystring')
    config.data = querystring.stringify(config.data)
  }
  if (!config.data) {
    config.data = {}
  }
  // console.log(config)
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
  // ElementUI.$message.error('登陆超时！请重新登录')
  router.push('/')
  return Promise.reject(error)
})

Vue.component('content100', Content100)
Vue.component('card100', Card100)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
