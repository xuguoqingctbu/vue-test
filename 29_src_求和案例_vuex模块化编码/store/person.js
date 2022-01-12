//人员管理相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default {
  namespaced: true, //开启命名空间
  actions: {
    addPersonWang(context,value){
      console.log('actions中的addPersonWang被调用了', value);
      if(value.name.indexOf('王')==0){
        context.commit('ADD_PERSON',value);
      }else{
        alert("必须输入姓王的人");
      }
    },
    addPersonServer(context){
      console.log('actions中的addPersonServer被调用了');
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response =>{
            const person ={id:nanoid(),name:response.data};
            context.commit('ADD_PERSON',person);
        },
        error=>{
          alert(error.message) 
        }
      )
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log('mutations中的ADD_PERSON被调用了', value);
      state.personList.unshift(value);
    }
  },
  state: {
    personList: [{
      id: '001',
      name: '张三'
    }]
  },
  getters: {
    firstPersonName(state){
     return state.personList[0].name;
    }
  }
}