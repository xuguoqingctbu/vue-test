<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
          <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
        </li>
      </ul>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // beforeDestroy() {
  //   console.log("Home组件即将被销毁了");
  // },
  // mounted() {
  //   console.log("Home组件挂载完毕了", this);
  //   window.homeRoute = this.$route;
  //   window.homeRouter = this.$router;
  // },
};
</script>

<style>
</style>