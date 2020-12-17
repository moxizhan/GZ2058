<template>
  <div id="app">
    <Play
      v-if="currentMusic"
      :currentMusic="currentMusic"
      :playlist="playlist"
      :currentIndex ="currentIndex"
      @update:paused="paused = $event"
      @update:music="currentMusic = $event.item; currentIndex= $event.index"

    />

    <HomeNav v-if="$route.meta.isShowNav" />

    <!-- <router-view
      @translate-music="currentMusic = $event"
      v-bind:currentMusic.sync="currentMusic"
    /> -->

    <router-view
      @update:music="currentMusic = $event.item; currentIndex= $event.index"
      @update:playlist="playlist = $event"
      v-bind:currentMusic="currentMusic"
      v-bind:paused="paused"
    />
  </div>
</template>

<script>
import HomeNav from "@/components/HomeNav.vue";
import Play from "@/components/Play.vue";
export default {
  components: {
    HomeNav,
    Play,
  },
  data: function () {
    return {
      currentMusic: null,
      paused: null,
      playlist: [],
      currentIndex: 0
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* This changes all the animations globally */
:root {
  --animate-duration: 300ms;
  /* --animate-delay: 0.9s; */
}
</style>
