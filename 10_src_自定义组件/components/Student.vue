<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sendStudentName">点击展示学生姓名</button>
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  // props: ["getStudentName"],
  data() {
    return {
      name: "张三",
      sex: "男",
      age: 18,
    };
  },
  methods:{
    sendStudentName(){
      // this.getStudentName(this.name);
      this.$emit("qingge",this.name);
      this.$emit("demo");
    },
    unbind(){
      this.$off("qingge");   //解绑一个自定义事件
      //this.$off(["qingge","demo"]);  //解绑两个事件
      //this.$off();              //解绑所有事件
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