<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "恒生聚源",
      address: "上海浦东新区",
    };
  },
  mounted(){
    console.log("School",this);
    this.$bus.$on("hello",(data)=>{
    console.log("我收到学生的信息为"+data);
    })
  },
  beforeDestroy(){
    this.$bus.$off("hello");
  }
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>