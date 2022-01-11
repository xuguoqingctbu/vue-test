<template>
  <div class="row">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      //请求前更新List的数据
      this.$bus.$emit("updateListData", {
        isLoading: true,
        errMsg: "",
        users: [],
        isFirst: false,
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // console.log(response);
          //请求成功后更新List的数据
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
            isFirst: false,
          });
        },
        //请求失败后更新List的数据
        (error) => {
          // console.log(error);
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: error.message,
            users: [],
            isFirst: false,
          });
        }
      );
    },
  },
};
</script>

<style>
</style>