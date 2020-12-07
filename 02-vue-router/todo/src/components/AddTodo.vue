<template>
  <div>
    <span>🎎</span>
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
  data: function () {
    return {
      text: "",
    };
  },
};
</script>

<style>
</style>