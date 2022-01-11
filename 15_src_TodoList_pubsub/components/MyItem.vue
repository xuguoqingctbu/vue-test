<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleRemove(todo.id)" >删除</button>
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
      // this.$bus.$emit("checkTodo",id);
      pubsub.publish('checkTodo',id);
    },
    handleRemove(id) {
      if (confirm("确定删除吗？")) {
        //通知App组件将对应的todo对象删除
        // this.removeTodo(id);
        // this.$bus.$emit("removeTodo",id);
        pubsub.publish('removeTodo',id);
      }
    },
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