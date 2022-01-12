<template>
  <div>
    <h1>count 组件求和的值为:{{ sum }}</h1>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <ul>
      <li v-for="person in personList" :key="person.id">
        <h4>姓名为：{{ person.name }}</h4>
      </li>
    </ul>
    <input type="text" v-model="personName" placeholder="请输入姓名" />
    <button @click="addPerson">添加一个人</button>
    <button @click="addPersonWang">添加姓王的人</button>
    <button @click="addPersonServer">随机添加一个人</button>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      personName: "",
    };
  },
  computed: {
    // ...mapState(["sum", "personList"]),
    personList() {
      // return this.$store.state.personList;
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName'];
    }
  },
  methods: {
    addPerson() {
      let person = { id: nanoid(), name: this.personName };
      this.$store.commit("personAbout/ADD_PERSON", person);
      this.personName = "";
    },
    addPersonWang(){
      let person = { id: nanoid(), name: this.personName };
      this.$store.dispatch("personAbout/addPersonWang",person);
      this.personName = "";
    },
    addPersonServer(){
      this.$store.dispatch("personAbout/addPersonServer",this.personName);
      this.personName = "";
    }
  },
};
</script>

<style>
</style>