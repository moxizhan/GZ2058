<template>
  <div id="app">
    <div id="nav" v-if="$route.meta.showNav">
      <van-nav-bar left-text="" right-text="搜" left-arrow>
        <template #title>
          <van-tabs v-model="active">
            <van-tab title="发现" to="/"></van-tab>
            <van-tab title="频道" to="/cate"></van-tab>
            <van-tab title="我的" to="/me"></van-tab>
          </van-tabs>
        </template>
      </van-nav-bar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      active: 0,
    };
  },
};
</script>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
