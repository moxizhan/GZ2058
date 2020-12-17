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
    };
  },
  computed: {
    currentRecommends: function () {
      return this.recommends.slice(0, 6);
    },
  },
  created() {
    console.log("created");
    this.axios.get("/personalized").then((response) => {
      // console.log(response.data.result);
      this.recommends = response.data.result;
    });

    this.axios.get("/personalized/newsong").then((response) => {
      // console.log(response.data.result);
      this.newSongs = response.data.result;
    });
  },
};
</script>

<style>
</style>