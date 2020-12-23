<template>
  <div>
    <h3><slot></slot></h3>
    <ListItem
      v-for="book in booklists.books.slice(0, 4)"
      :key="book._id"
      :book="book"
    />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  props: ["booklists"],
  components: {
    ListItem,
  },
};
</script>

<style>
</style>