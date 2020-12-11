<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li v-for="(video) in videos" :key="video.id">
          <h3>{{video.data.content.data.title}}</h3>
          <img style="width:100px" :src="video.data.content.data.cover.feed" alt="">
        </li>
      </ul>

      <hr>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      videos: [],
    };
  },
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

    // this.axios
    //   .get("/heros.json")
    //   .then(function (response) {
    //     console.log(response);
    //   });

    // https://m.maoyan.com/ajax/movieOnInfoList?&optimus_risk_level=71&optimus_code=10

    // this.axios
    // .get("http://api.kele8.cn/agent/https://m.maoyan.com/ajax/movieOnInfoList?&optimus_risk_level=71&optimus_code=10")
    // .then(function (response) {
    //   console.log(response);
    // });

    // this.axios
    // .get("/ajax/movieOnInfoList?&optimus_risk_level=71&optimus_code=10")
    // .then(function (response) {
    //   console.log(response);
    // });

    // http://baobab.kaiyanapp.com/api/v1/tag/videos?id=16
    this.axios.get("/api/v1/tag/videos?id=16").then((response) => {
      // console.log(response);
      this.videos = response.data.itemList;
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
