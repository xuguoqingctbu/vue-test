<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.hi43JL-BaI2DFHQpzo7uCwHaEo?w=313&h=195&c=7&r=0&o=5&pid=1.7" alt="shibai" />
      <a slot="footer" href="https:www.baidu.com">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">
          {{ game }}
        </li>
      </ul>
      <div class="foot" slot="footer">
        <a href="www.baidu.com">单机游戏</a>
        <a href="www.baidu.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">经典</a>
					<a href="http://www.atguigu.com">热门</a>
					<a href="http://www.atguigu.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
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
.container, .foot {
  display: flex;
  justify-content: space-around;
}
</style>