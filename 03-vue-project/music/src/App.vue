<template>
  <div id="app">
    <Play
      v-if="currentMusic"
      :currentMusic="currentMusic"
      @update:paused="paused = $event"
    />

    <HomeNav v-if="$route.meta.isShowNav" />

    <!-- <router-view
      @translate-music="currentMusic = $event"
      v-bind:currentMusic.sync="currentMusic"
    /> -->

    <router-view
      @update:music="currentMusic = $event"
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
</style>
