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
    // console.log("@Detail", this, this.$router, this.$route);
     console.log("Detail组件挂载完毕了", this);
  },
  beforeDestroy(){
    console.log("Detail组件即将被销毁！！");
  }
};
</script>

<style>
</style>