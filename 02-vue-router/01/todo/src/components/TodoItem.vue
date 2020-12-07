<template>
  <li>
    <input
      type="checkbox"
      @change="changeHandler(todo.id)"
      :checked="todo.complated"
    />
    <span :class="{ complated: todo.complated }">{{ todo.text }}</span>
    <button>X</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
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