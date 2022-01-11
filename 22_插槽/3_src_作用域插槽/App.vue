<template>
  <div class="container">
    <Category title="游戏">
      <template slot-scope="{games}">
        <ul>
          <li v-for="(game, index) in games" :key="index">{{game}}</li>
        </ul>
      </template>
    </Category>

     <Category title="游戏">
      <template slot-scope="{games}">
        <ol>
          <li v-for="(game, index) in games" :key="index" style="color: aquamarine;">
            {{ game }}
          </li>
        </ol>
      </template>
    </Category>
     <Category title="游戏">
      <template slot-scope="scopeData">
        <h4 v-for="(game, index) in scopeData.games" :key="index">{{game}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>