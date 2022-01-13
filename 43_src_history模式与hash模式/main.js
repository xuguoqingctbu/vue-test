import Vue from 'vue'
import App from './App.vue'
//引入vue-router插件
import router from './router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')

