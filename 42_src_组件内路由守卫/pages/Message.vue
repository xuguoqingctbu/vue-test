<template>
  <div>
    <ul>
      <!-- <li><a href="http://www.baidu.com">message001</a>&nbsp;&nbsp;</li> -->
      <li v-for="m in messageList" :key="m.id">
        <router-link
          active-class="active"
          :to="{
            //path:'/home/message/detail',
            name: 'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "message001" },
        { id: "002", title: "message002" },
        { id: "003", title: "message003" },
      ],
    };
  },
  methods:{
    pushShow(m){
      this.$router.push({
        name:'xiangqing',
        query:{
          id:m.id,
          title:m.title
        }
      })
    },
    replaceShow(m){
      this.$router.replace({
        name:'xiangqing',
        query:{
          id:m.id,
          title:m.title
        }
      })
    }
  },
   mounted(){
      console.log("Message组件挂载完毕了", this);
  },
  beforeDestroy(){
    console.log("Message组件即将被销毁！！");
  }
};
</script>

<style>
</style>