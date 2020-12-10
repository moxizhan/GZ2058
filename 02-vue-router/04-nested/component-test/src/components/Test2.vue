<template>
  <!-- <div class="test" @click="$emit('change-msg', Date.now())">{{ msg }}</div> -->
  <div class="test2">
    <h3 @click="$emit('update:title', '子组件修改的标题')">{{ title }}</h3>
    <Test3
      :content="content"
      @update:content="$emit('update:content', $event)"
    />
  </div>
</template>

<script>
import Test3 from "./Test3.vue";

export default {
  components: {
    Test3,
  },
  props: ["title", "content"],
};
</script>

<style>
</style>