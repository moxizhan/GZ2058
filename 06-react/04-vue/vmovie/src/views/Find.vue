<template>
  <div class="find">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="banner in index.banner.list"
        :key="banner.bannerid"
      >
        <img style="width: 100%" :src="banner.image" alt="" />
      </van-swipe-item>
    </van-swipe>

    <hr />
    <ul>
      <li
        @click="$router.push('/post?id=' + item.postid)"
        v-for="item in index.hot.list"
        :key="item.postid"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Find",
  components: {},

  data() {
    return {
      index: null,
    };
  },

  created() {
    const localIndex = JSON.parse(window.localStorage.getItem("index"));
    if (localIndex && localIndex.expire > Date.now()) {
      this.index = localIndex.data;
    } else {
      this.axios.get("/index/index").then((res) => {
        console.log(res.data.data);
        window.localStorage.setItem(
          "index",
          JSON.stringify({
            expire: Date.now() + 1 * 60 * 60 * 1000,
            data: res.data.data,
          })
        );
        this.index = res.data.data;
      });
    }
  },
};
</script>
