<template>
  <div>
    <ul>
      <!-- <li><a href="http://www.baidu.com">message001</a>&nbsp;&nbsp;</li> -->
      <li v-for="m in messageList" :key="m.id">
        <router-link
          replace
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
};
</script>

<style>
</style>