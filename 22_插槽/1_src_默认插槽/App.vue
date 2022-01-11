<template>
  <div class="container">
    <Category title="美食">
      <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.hi43JL-BaI2DFHQpzo7uCwHaEo?w=313&h=195&c=7&r=0&o=5&pid=1.7" alt="shibai" />
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">
          {{ game }}
        </li>
      </ul>
    </Category>

    <Category title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>