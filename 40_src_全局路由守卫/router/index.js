//引入VueRouter
import VueRouter from 'vue-router'
//引入vue
import Vue from 'vue'
//引入路由组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import News from '../pages/News'

//使用VueRouter
Vue.use(VueRouter);


//配置路由点击重复报错
const originalReplace =VueRouter.prototype.replace;
VueRouter.prototype.replace =function replace(location){
  return originalReplace.call(this,location).catch(err=>err);
};
const originalPush =VueRouter.prototype.push;
VueRouter.prototype.push =function push(location){
  return originalPush.call(this,location).catch(err=>err);
};

//创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      path: '/about',
      component: About,
      meta: {
        isAuth: false,
        title: '关于'
      }
    },
    {
      name: 'shouye',
      path: '/home',
      component: Home,
      meta: {
        isAuth: false,
        title: '首页'
      },
      children: [
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: {
            isAuth: true,
            title: '消息'
          },
          children: [{
            name: 'xiangqing',
            path: 'detail',
            component: Detail,
            meta: {
              isAuth: true,
              title: '详情',
            },
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
                  id: $route.query.id,
                  title: $route.query.title,
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
          component: News,
          meta: {
            isAuth: true,
            title: '新闻'
          }
        }
      ]
    }
  ]
})
//全局前置路由守卫————初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to, from, next) => {
  console.log('前置路由守卫', to, from);
  if (to.meta.isAuth) {
    if (localStorage.getItem("name") == 'qingge') {
      next();
    } else {
      alert("当前用户没有权限访问！！！");
    }
  } else {
    next();
  }
});
//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
  console.log("全局后置路由守卫",to,from);
  document.title = to.meta.title||'qingge';
})
export default router;