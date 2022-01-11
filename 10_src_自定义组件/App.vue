<template>
  <div id="root">
    <h1>
      {{ msg }}
      <span v-if="studentName">,学生的姓名为：{{ studentName }}</span>
      <span v-if="schoolName">,学校的名字为：{{ studentName }}</span>
    </h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <!-- <StudentVue :getStudentName="getStudentName"></StudentVue> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <StudentVue @qingge="getStudentName" @demo="showDemo" @click.native="showAlert"></StudentVue> -->
     <StudentVue @qingge="getStudentName" @demo="showDemo"></StudentVue>
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- <StudentVue ref="student"></StudentVue> -->
    <SchoolVue></SchoolVue>
  </div>
</template>

<script>
import SchoolVue from "./components/School.vue";
import StudentVue from "./components/Student.vue";
export default {
  name: "App",
  components: { SchoolVue, StudentVue },
  data() {
    return {
      msg: "你好呀！！",
      studentName: "",
      schoolName: "",
    };
  },
  // mounted(){
  //   this.$refs.student.$on("qingge",this.getStudentName);  //绑定自定义事件
  // },
  methods: {
    getStudentName(value) {
       console.log("收到学生的姓名为：", value);
      this.studentName = value;
    },
    showDemo(){
      console.log("触发了demo");
    },
    showAlert(){
      alert("你好呀！");
    }
  },
};
</script>

<style>
.root {
  background-color: gray;
  padding: 5px;
}
</style>