<template>
<div>
  <Test></Test>
  <Test1></Test1>
  <Test2></Test2>
</div>
</template>

<script>
import Test from "./components/Test";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
export default {
  name: "App",
  components: {Test,Test1,Test2},
};
</script>

<style>
</style>