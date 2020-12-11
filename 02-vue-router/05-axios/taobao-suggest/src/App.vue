<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    // console.log("this.axios", this.axios);
    // console.log("this.$axios", this.$axios);
    // console.log("this.$http", this.$http);
    // 链接本身 就支持 ajax 跨域 访问
    // this.axios.get("http://api.kele8.cn").then(function (response) {
    //   console.log(response);
    // });
    // 跨域 不允许
    // this.axios
    //   .get("https://suggest.taobao.com/sug", {
    //     params: {
    //       code: "utf-8",
    //       q: "手机",
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   });
    // 走代理服务器
    // this.axios
    //   .get("http://api.kele8.cn/agent/https://suggest.taobao.com/sug", {
    //     params: {
    //       code: "utf-8",
    //       q: "手机",
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   });


    // axios 配置 不能解决跨域 只是省写代码
    // this.axios
    //   .get("/sug", {
    //     params: {
    //       code: "utf-8",
    //       q: "手机",
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   });


    // 需要配合 devServer.proxy
    this.axios
      .get("/sug", {
        params: {
          code: "utf-8",
          q: "手机",
        },
      })
      .then(function (response) {
        console.log(response);
      });
  },
};
</script>

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
