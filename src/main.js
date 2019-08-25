import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Collapse from './components/collapse'
Vue.use(Collapse)

import IconFont from './components/icon-font'
Vue.use(IconFont)
import '@/assets/font/iconfont.css'

import Pop from './components/pop'
Vue.use(Pop)

import VvButton from "./components/button";
Vue.use(VvButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
