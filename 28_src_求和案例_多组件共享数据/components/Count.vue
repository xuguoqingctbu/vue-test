<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和值扩大10倍为：{{ bigSum }}</h1>
    <h3>欢迎来到{{ school }}学习{{ subject }}</h3>
    <h1>Person组件的人数为：{{personList.length}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <!-- <button @click="JIA(n)">+</button> -->
    <button @click="decrement(n)">-</button>
    <!-- <button @click="JIAN(n)">-</button> -->
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <!-- <button @click="jiaOdd(n)">当前求和为奇数再加</button> -->
    <button @click="incrementWait(n)">等一等再加</button>
    <!-- <button @click="jiaWait(n)">等一等再加</button> -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(["sum", "school", "subject",'personList']),

    //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters(["bigSum"]),
  },
  mounted() {
    console.log("count", this.$store);
  },
  methods: {
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
  },
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>