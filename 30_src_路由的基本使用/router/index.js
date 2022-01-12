//引入VueRouter
import VueRouter from 'vue-router'
//引入Luyou 组件
import About from '../components/About'
import Home from '../components/Home'

export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      path: '/home',
      component: Home,
    }
  ]
})