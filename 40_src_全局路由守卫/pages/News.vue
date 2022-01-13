<template>
  <div>
    <ul>
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // mounted() {
  //   console.log("New组件挂载完毕了", this);
  //   this.timer = setInterval(() => {
  //     console.log("@");
  //     this.opacity -= 0.01;
  //     if (this.opacity < 0) {
  //       this.opacity = 1;
  //     }
  //   }, 16);
  // },
  // beforeDestroy() {
  //   console.log("New组件即将被销毁！！");
  //   clearInterval(this.timer);
  // },
  activated() {
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity < 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated(){
     clearInterval(this.timer);
  }
};
</script>

<style>
</style>