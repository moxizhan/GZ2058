<template>
  <div>
    <GeneralHeader title="书籍详情" />

    <div v-if="bookInfo">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        :title="bookInfo.title"
        :thumb="`http://statics.zhuishushenqi.com${bookInfo.cover}`"
      />
      <van-button type="default">加入书架</van-button>
      <van-button
        type="info"
        @click="$router.push(`/book/${$route.params.id}/read`)"
        >开始阅读</van-button
      >

      <p @click="$router.push(`/book/${$route.params.id}/chapter`)">
        {{ bookInfo.lastChapter }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookInfo: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    // ...
    // setTimeout(() => {
    //   next((vm) => {vm});
    // }, 3000);

    window.axios
      .get("http://novel.kele8.cn/book-info/" + to.params.id)
      .then((res) => {
        next((vm) => {
          vm.bookInfo = res.data;
        });
      });
  },
  beforeRouteUpdate: function (to, from, next) {
    // http://novel.kele8.cn/book-info/:id
    console.log(to);
    next();
  },

  beforeRouteLeave(to, from, next) {
    // ...

    if (to.name == "Read" || to.name == "Chapter") {
      console.log("获取章节");

      // 获取书籍源
      this.axios
        .get(
          "http://novel.kele8.cn/book-sources?view=summary&book=" +
            this.bookInfo._id
        )
        .then((res) => {
          // 根据书籍源获取 章节
          console.log(res.data[0]._id);
          this.axios
            .get("http://novel.kele8.cn/book-chapters/" + res.data[0]._id)
            .then((res) => {
              console.log(res.data);
              this.$store.commit("updateChapter", res.data);
              next();
            });
        });
    } else {
      next();
    }
  },
};
</script>

<style>
</style>