<template>
  <div class="play-bar">
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
    <div>{{ currentMusic.name }}</div>
  </div>
</template>

<script>
export default {
  props: ["currentMusic"],
  data: function () {
    return {
      paused: null,
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
      this.paused = true;
    });
    this.$refs.audio.addEventListener("play", () => {
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
  background: red;
}
</style>