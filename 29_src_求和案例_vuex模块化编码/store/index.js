 //引入Vue核心库
 import Vue from 'vue'
 //引入Vuex
 import Vuex from 'vuex'
 //应用Vuex插件
 Vue.use(Vuex)

 import countAbout from './count'
 import personAbout from './person'

 //创建并暴露store
export default new Vuex.Store({
  modules:{
    countAbout,
    personAbout
  }
})
