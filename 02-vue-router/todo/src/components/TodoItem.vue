<template>
  <li>
    <input
      type="checkbox"
      @change="changeHandler(todo.id)"
      :checked="todo.complated"
    />
    <span
    v-if="!inputing"
      :class="{ complated: todo.complated }"
      @dblclick="
        text = todo.text;
        inputing = true;
      "
      >{{ todo.text }}</span
    >
    <input
      v-if="inputing"
      type="text"
      v-model.trim="text"
      @keyup.enter="
        $emit('updata-todo', todo.id, text);
        text = '';
        inputing = false
      "
    />
    <button @click="$emit('delete-todo', todo.id)">X</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  data: function () {
    return {
      inputing: false,
      text: "",
    };
  },
  methods: {
    changeHandler: function (id) {
      console.log("TodoItem", id);
      this.$emit("toggle", id);
    },
  },
};
</script>

<style>
.complated {
  text-decoration: line-through;
}
</style>