<template>
  <div class="recommend">
    <RecommendPlayList :currentRecommends="currentRecommends"
      >推荐歌单</RecommendPlayList
    >

    <RecommendNewMusic
      @update:music="$emit('update:music', $event)"
      @update:playlist="$emit('update:playlist', $event)"
      :newSongs="newSongs"
      :currentMusic="$attrs.currentMusic"
      :paused="$attrs.paused"
      >最新音乐</RecommendNewMusic
    >
  </div>
</template>

<script>
import RecommendPlayList from "@/components/RecommendPlayList.vue";
import RecommendNewMusic from "@/components/RecommendNewMusic.vue";

export default {
  components: {
    RecommendPlayList,
    RecommendNewMusic,
  },
  data: function () {
    return {
      recommends: [],
      newSongs: [],
      recommendsIndex: 0,
      count: 0,
    };
  },
  computed: {
    currentRecommends: function () {
      return this.recommends.slice(
        this.recommendsIndex * 6,
        (this.recommendsIndex + 1) * 6
      );
    },
  },
  created() {
    console.log("created");
    this.$root.isShowLoading = true;
    this.axios
      .get("/personalized")
      .then((response) => {
        // console.log(response.data.result);
        this.recommends = response.data.result;
      })
      .finally(() => {
        this.count = this.count + 1;
      });

    this.axios
      .get("/personalized/newsong")
      .then((response) => {
        // console.log(response.data.result);
        this.newSongs = response.data.result;
      })
      .finally(() => {
        this.count = this.count + 1;
      });
  },

  watch: {
    count: function (n) {
      if (n >= 2) {
        this.$root.isShowLoading = false;
      }
    },
  },

  activated() {
    console.log("切换到推荐");
    this.recommendsIndex =
      this.recommendsIndex >= 4 ? 0 : this.recommendsIndex + 1;
  },
};
</script>

<style>
</style>