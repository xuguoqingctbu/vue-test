import Vue from 'vue'
import App from './App.vue'
//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui'
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';
import { Button,Row,DatePicker } from 'element-ui';
//关闭Vue的生产提示
Vue.config.productionTip = false

// Vue.component(Button.name,Button);
// Vue.component(Row.name,Row);
// Vue.component(DatePicker.name,DatePicker);
Vue.use(Button);
Vue.use(Row);
Vue.use(DatePicker);
//应用ElementUI
// Vue.use(ElementUI);
// Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')

