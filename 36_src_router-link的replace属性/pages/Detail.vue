<template>
  <ol>
    <li>消息编号：{{data.id}}</li>
    <li>消息标题：{{ data.title}}</li>
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