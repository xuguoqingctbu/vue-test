<template>
  <ol>
    <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.title }}</li>
  </ol>
</template>

<script>
export default {
  name: "Detail",
  props: ['data'],
  mounted() {
    console.log("@Detail", this, this.$router, this.$route);
  },
};
</script>

<style>
</style>