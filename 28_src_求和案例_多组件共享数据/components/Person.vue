<template>
  <div>
    <h1>count 组件求和的值为:{{ sum }}</h1>
    <ul>
      <li v-for="person in personList" :key="person.id">
        <h4>姓名为：{{ person.name }}</h4>
      </li>
    </ul>
    <input type="text" v-if="isShow" v-model="personName" placeholder="请输入姓名" @blur="addPerson"/>
    <button @click="updateShow">添加一个人</button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
import { mapState } from "vuex";

export default {
  name: "Person",
  data() {
    return {
      isShow:false,
      personName: "",
    };
  },
  computed: {
    // ...mapState(["sum", "personList"]),
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    updateShow() {
      this.isShow = true
    },
    addPerson(){
      let person={id:nanoid(),name:this.personName};
      this.$store.commit("ADD_PERSON",person);
      this.personName='';
      this.isShow = false;
    }
  },
};
</script>

<style>
</style>