<template>
  <section>
    <!-- <h3><slot></slot></h3> -->
    <BorderedTitle><slot></slot></BorderedTitle>
    <ul>
      <SongItem
        @update:music="$emit('update:music', $event)"
        v-for="song in newSongs"
        :key="song.id"
        :item="song"
        :currentMusic="$attrs.currentMusic"
        :paused="$attrs.paused"
      />
    </ul>
  </section>
</template>

<script>
import BorderedTitle from "@/components/BorderedTitle.vue";
import SongItem from "@/components/SongItem.vue";

export default {
  props: {
    newSongs: {
      type: Array,
    },
  },
  components: {
    BorderedTitle,
    SongItem,
  },
};
</script>

<style>
</style>