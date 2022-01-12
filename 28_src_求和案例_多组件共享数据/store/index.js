 //引入Vue核心库
 import Vue from 'vue'
 //引入Vuex
 import Vuex from 'vuex'
 //应用Vuex插件
 Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
const actions = {
  /* jia(context,value){
		console.log('actions中的jia被调用了')
		context.commit('JIA',value)
	},
	jian(context,value){
		console.log('actions中的jian被调用了')
		context.commit('JIAN',value)
	}, */
  jiaOdd(context,value){
    console.log('actions中的jiaOdd被调用了',value);
    // console.log('@jiaOdd',context,value);
    if(context.state.sum%2){
      context.commit("JIA",value);
    }
  },
  jiaWait(context,value){
    console.log('actions中的jiaWait被调用了',value);
    setTimeout(()=>{
      context.commit("JIA",value);
    },1000)
  }
}
//准备mutations对象——修改state中的数据
const mutations = {
  JIA(state,value){
    console.log('mutations中的JIA被调用了',value);
    state.sum = state.sum +value;
  },
  JIAN(state,value){
    console.log('mutations中的JIAN被调用了',value);
    state.sum = state.sum -value;
  },
  ADD_PERSON(state,value){
    console.log('mutations中的ADD_PERSON被调用了',value);
    state.personList.unshift(value);
  }
}
//当state中的数据需要经过加工后再使用时，可以使用getters加工
//准备getters——用于将state中的数据进行加工
const getters ={
  bigSum(state){
    return state.sum *10;
  }
}
  //准备state对象——保存具体的数据
const state = {
  sum:0,  //当前的和
  school:'上海恒生',
	subject:'前端',
  personList:[{
    id:'001',
    name:'张三'
  }]
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
