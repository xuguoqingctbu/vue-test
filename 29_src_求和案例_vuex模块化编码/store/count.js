//求和相关的配置
export default {
  namespaced: true, //开启命名空间
  actions: {
    jiaOdd(context, value) {
      console.log('actions中的jiaOdd被调用了', value);
      // console.log('@jiaOdd',context,value);
      if (context.state.sum % 2) {
        context.commit("JIA", value);
      }
    },
    jiaWait(context, value) {
      console.log('actions中的jiaWait被调用了', value);
      setTimeout(() => {
        context.commit("JIA", value);
      }, 1000)
    }
  },
  mutations: {
    JIA(state, value) {
      console.log('mutations中的JIA被调用了', value);
      state.sum = state.sum + value;
    },
    JIAN(state, value) {
      console.log('mutations中的JIAN被调用了', value);
      state.sum = state.sum - value;
    },
  },
  state: {
    sum: 0,  //当前的和
    school: '上海恒生',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    }
  }
}