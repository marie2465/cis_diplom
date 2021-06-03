import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from '@/router'
import './registerServiceWorker'
import './assets/style/main.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
