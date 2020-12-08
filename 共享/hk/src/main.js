// main是一个入口文件

// 'vue'这种形式会去node_modules文件中找
// './App.vue'是在和自己同一个目录的同一级找文件

// 导入vue主文件
import Vue from 'vue'
// 导入APP组件（根组件）
import App from './App.vue'
// 导入路由配置，route目录下有index.js，可忽略写文件名
import router from './router'



// 关闭生产环境提示
Vue.config.productionTip = false




// vue实例化
new Vue({
  // 路由
  router,

  // 渲染组件
  render: h => h(App)
}).$mount('#app')
