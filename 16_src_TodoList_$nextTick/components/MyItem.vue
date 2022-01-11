<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleRemove(todo.id)" >删除</button>
    <button class="btn btn-primary" @click="handleEdit(todo)">修改</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "MyItem",
  props: ["todo"],
  methods: {
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id);
       this.$bus.$emit("checkTodo",id);
      //pubsub.publish('checkTodo',id);
    },
    handleRemove(id) {
      if (confirm("确定删除吗？")) {
        //通知App组件将对应的todo对象删除
        // this.removeTodo(id);
        // this.$bus.$emit("removeTodo",id);
        pubsub.publish('removeTodo',id);
      }
    },
    handleEdit(todo){
      // eslint-disable-next-line no-prototype-builtins
      if(todo.hasOwnProperty("isEdit")){
        todo.isEdit = true;
      }else{
          this.$set(todo,'isEdit',true);
      }
      this.$nextTick(function(){
        this.$refs.inputTitle.focus();
      })
    },
    handleBlur(todo,e){
      todo.isEdit = false;
      if(!e.target.value.trim()) return alert('输入不能为空！');
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
      // console.log(todo,e);
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display:block;
}
</style>