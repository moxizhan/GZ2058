<template>
  <!-- <div class="test" @click="$emit('change-msg', Date.now())">{{ msg }}</div> -->
  <div class="test" @click="$emit('update:msg', Date.now())">{{ msg }}</div>

</template>

<script>
export default {
  props: ["msg"],
};
</script>

<style>
</style>