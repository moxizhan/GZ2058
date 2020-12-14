<template>
  <div class="play-bar">
    <audio
      :src="
        'https://music.163.com/song/media/outer/url?id=' +
        currentMusic.id +
        '.mp3'
      "
      controls
      style="width: 100%; height: 40px"
    ></audio>
  </div>
</template>

<script>
export default {
  props: ["currentMusic"],
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