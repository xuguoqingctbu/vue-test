import Vue from 'vue'
import App from './App.vue'
/*引入资源请求插件*/
import VueResource from 'vue-resource'
Vue.config.productionTip = false

/*使用VueResource插件*/
Vue.use(VueResource)
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')

