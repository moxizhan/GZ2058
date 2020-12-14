<template>
  <li class="song-item" @click="$emit('translate-music', item)">
    <div>
      <h5>{{ item.name }}</h5>
      <p>
        <span v-for="(artist, index) in item.song.artists" :key="index">
          <template v-if="index"> / </template>{{ artist.name }}
        </span>
      </p>
    </div>
    <div class="icon">play</div>
  </li>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
</style>