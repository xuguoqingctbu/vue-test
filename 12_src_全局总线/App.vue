<template>
  <div id="root">
    <h1>{{ msg }}</h1>
    <SchoolVue></SchoolVue>
    <StudentVue></StudentVue>
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
    };
  },
};
</script>

<style>
.root {
  background-color: gray;
  padding: 5px;
}
</style>