<template>
  <div id="app">
    <!-- <div id="nav" v-if="!$route.meta.isHiddenNav">
      <router-link to="/">推荐音乐</router-link> |
      <router-link to="/hot">热歌榜</router-link>
      <router-link to="/search">搜索</router-link>
    </div> -->

    
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
