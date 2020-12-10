<template>
  <p @click="$emit('update:content', '孙组件修改的内容')">{{ content }}</p>
</template>

<script>
export default {
  props: ["content"],
};
</script>

<style>
</style>