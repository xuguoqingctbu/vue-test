<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data() {
    return {
      name: "恒生聚源",
      address: "上海浦东新区",
    };
  },
  methods:{
    demo(a,b){
      console.log("收到学生的姓名为：",a,b);
    }
  },
  mounted(){
    //订阅消息
    // this.pid =pubsub.subscribe('hello',(a,b)=>{
    //   console.log(this);
    //   console.log(a,b);
    // });
    this.pid = pubsub.subscribe('hello',this.demo);
  },
  beforeDestroy(){
    //销毁订阅消息
    pubsub.unsubscribe(this.pid);
  }
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>