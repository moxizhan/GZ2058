import Vue from 'vue'
import './plugins/axios'

// Vue.axios
// console.log(Vue.axios);
// console.log(window.axios);


import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
