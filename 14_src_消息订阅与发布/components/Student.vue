<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">把学生姓名发送给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      age: 18,
    };
  },
  methods:{
    sendStudentName(){
      pubsub.publish('hello',this.name);
    }
  }
};
</script>
<style scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>