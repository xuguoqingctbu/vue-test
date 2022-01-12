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
      name: 'shouye',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          children: [{
            name: 'xiangqing',
            path: 'detail/:id/:title',
            component: Detail,
            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
            // props: {
            //   a: 1,
            //   b: 'hello'
            // }
            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
            // props:true
            props($route) {
              return {
                data: {
                  id: $route.params.id,
                  title: $route.params.title,
                  a: 1,
                  b: 'hello'
                }
              }
            }
          }]
        },
        {
          name: 'xinwen',
          path: 'news',
          component: News
        }
      ]
    }
  ]
})