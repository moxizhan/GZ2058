<template>
  <li
    class="song-item"
    @click="
      $emit('update:music', { item, index });
      $emit('update:playlist');
    "
  >
    <div class="info">
      <h5>{{ item.name }}</h5>
      <p>
        <span v-for="(artist, index) in item.song.artists" :key="index">
          <template v-if="index"> / </template>{{ artist.name }}
        </span>
      </p>
    </div>
    <div class="icon">
      <span
        class="playing"
        :class="{ paused: paused }"
        v-if="currentMusic && currentMusic.id === item.id"
      >
        <i></i>
        <i></i>
        <i></i>
      </span>
      <span v-else>play</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ["item", "index", "currentMusic", "paused"],
  // created() {
  //   console.log('$root',this.$root);
  //   console.log('$parent',this.$parent);
  // },
};
</script>

<style lang="less">
li.song-item {
  display: flex;
  .info {
    flex: 1;
  }
  .icon {
    width: 30px;
    height: 30px;
    .playing {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      i {
        width: 6px;
        height: 30px;
        background: red;
        // display: inline-block;
        transform-origin: center bottom;

        animation: playing 0.6s linear -0.2s infinite alternate-reverse;

        &:first-of-type {
          animation-delay: 0s;
        }
        &:last-of-type {
          animation-delay: -0.4s;
        }
      }
      &.paused {
        i {
          animation-play-state: paused;
        }
      }
    }
  }
}

@keyframes playing {
  from {
    // height: 50px;
    transform: scaleY(1);
  }
  to {
    // height: 10px;
    transform: scaleY(0.2);
  }
}
</style>