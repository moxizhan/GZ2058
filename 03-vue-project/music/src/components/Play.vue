<template>
  <div class="paly">
    <audio
      :src="
        'https://music.163.com/song/media/outer/url?id=' +
        currentMusic.id +
        '.mp3'
      "
      controls
      autoplay
      style="width: 100%; height: 40px"
      ref="audio"
    ></audio>

    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__slideOutDown"
    >
      <div class="play-bar" v-if="isShowPlayBar" @click="isShowPlayBar = false">
        <div>{{ currentMusic.name }}</div>
      </div>
    </transition>

    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <div class="play-full" v-if="!isShowPlayBar">
        <PlayFullHeader @show-play-bar="isShowPlayBar = true" />
        <template>
          <PlayFullLyric
            v-if="isShowLyric"
            @toggle-show-lyric="isShowLyric = !isShowLyric"
          />
          <PlayFullChart
            v-else
            @toggle-show-lyric="isShowLyric = !isShowLyric"
          />
        </template>
        <PlayFullFooter />
      </div>
    </transition>
  </div>
</template>

<script>
import PlayFullHeader from "@/components/PlayFullHeader.vue";
import PlayFullChart from "@/components/PlayFullChart.vue";
import PlayFullLyric from "@/components/PlayFullLyric.vue";
import PlayFullFooter from "@/components/PlayFullFooter.vue";
export default {
  props: ["currentMusic"],
  components: {
    PlayFullHeader,
    PlayFullChart,
    PlayFullLyric,
    PlayFullFooter,
  },
  data: function () {
    return {
      paused: null,
      isShowLyric: false,
      isShowPlayBar: true,
    };
  },
  // created() {
  //   console.log("created", this.$refs.usernameInput);
  //   // console.log(this.$refs.usernameInput);
  // },
  mounted() {
    console.log("mounted", this.$refs.audio);
    // console.log(this.$refs.usernameInput);

    this.$refs.audio.addEventListener("pause", () => {
      console.log("暂停");
      this.paused = true;
    });
    this.$refs.audio.addEventListener("play", () => {
      console.log("播放");
      this.paused = false;
    });
  },
  // updated() {
  //   console.log("update", this.$refs.usernameInput);
  // },

  watch: {
    paused: function (n) {
      this.$emit("update:paused", n);
    },
  },
};
</script>

<style>
.play-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: green;
}
.play-full {
  background: rgba(255, 0, 0, 1);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
</style>