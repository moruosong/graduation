import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
// import Content100 from '~@/views/components/Content100'
// import Card100 from '~@/views/components/Card100'

Vue.config.productionTip = false
Vue.use(ElementUI)

// Vue.component('content100', Content100)
// Vue.component('card100', Card100)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
