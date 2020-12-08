<template>
  <div>
    <span @click="$emit('toggle-all')">{{isAllComplated? '🛑': '⭕'}}</span>
    <input
      type="text"
      @keyup.enter="
        $emit('add-todo', text);
        text = '';
      "
      v-model.trim="text"
    />
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: ['isAllComplated'],
  data: function () {
    return {
      text: "",
    };
  },
};
</script>

<style>
</style>