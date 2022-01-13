<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- <a class="list-group-item" href="./home-news.html">News</a> -->
          <!-- to="/home/news" -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            :to="{ name: 'xinwen' }"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
          <!-- <a class="list-group-item active" href="./home-message.html">Message</a> -->
        </li>
      </ul>
       <!-- 缓存多个个路由组件 -->
      <!-- <keep-alive :include="['News','Message']"> -->
      <!-- 缓存一个路由组件 -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeDestroy() {
    console.log("Home组件即将被销毁了");
  },
  mounted() {
    console.log("Home组件挂载完毕了", this);
    // window.homeRoute = this.$route;
    // window.homeRouter = this.$router;
  },
};
</script>

<style>
</style>