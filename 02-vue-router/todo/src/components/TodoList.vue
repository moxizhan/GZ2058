<template>
  <ul>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="$emit('toggle', $event)"
      @delete-todo="$emit('delete-todo', $event)"
      @updata-todo="updataTodo"
    />

    <!-- <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="toggle"
    /> -->
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    toggle: function (a) {
      //   console.log('TodoList', a);
      this.$emit("toggle", a);
    },
    updataTodo: function (a, b) {
      // console.log(a, b);
      this.$emit("updata-todo", a, b);
    },
  },
};
</script>

<style>
</style>