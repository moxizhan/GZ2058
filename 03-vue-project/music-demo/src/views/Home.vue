<template>
  <div class="home">

    <!-- home嵌套路由 复用内容 -->
    <div id="nav">
      <router-link to="/home">推荐音乐</router-link> |
      <router-link to="/home/hot">热歌榜</router-link>
      <router-link to="/home/search">搜索</router-link>
    </div>


    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>
