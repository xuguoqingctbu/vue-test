import Vue from 'vue'
import App from './App.vue'
//引入vue-router插件
import VueRouter from 'vue-router'
import router from './router'
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')

