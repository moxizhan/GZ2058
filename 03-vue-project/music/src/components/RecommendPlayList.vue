<template>
  <section>
    <!-- <h3><slot></slot></h3> -->
    <BorderedTitle><slot></slot></BorderedTitle>
    <ul class="playlist">
      <PlayListItem
        v-for="(item, index) in currentRecommends"
        :key="index"
        :item="item"
      />
    </ul>
  </section>
</template>

<script>
import BorderedTitle from "@/components/BorderedTitle.vue";
import PlayListItem from "@/components/PlayListItem.vue";

export default {
  props: {
    currentRecommends: {
      type: Array,
    },
  },
  components: {
    BorderedTitle,
    PlayListItem,
  },
};
</script>

<style>
.playlist {
    display: flex;
    flex-wrap: wrap;
}
</style>