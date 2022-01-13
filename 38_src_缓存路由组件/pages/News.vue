<template>
  <div>
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  mounted(){
      console.log("New组件挂载完毕了", this);
  },
  beforeDestroy(){
    console.log("New组件即将被销毁！！");
  }
};
</script>

<style>
</style>