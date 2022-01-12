//引入VueRouter
import VueRouter from 'vue-router'
//引入路由组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import News from '../pages/News'

//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
    },
    {
      name:'shouye',
      path: '/home',
      component: Home,
      children: [
        {
          name:'xiaoxi',
          path: 'message',
          component: Message,
          children:[{
            name:'xiangqing',
            path:'detail',
            component:Detail,
          }]
        },
        {
          name:'xinwen',
          path: 'news',
          component: News
        }
      ]
    }
  ]
})