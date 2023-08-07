import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select, Upload, Pagination } from 'element-ui'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
Vue.use(Upload)
Vue.use(Pagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
