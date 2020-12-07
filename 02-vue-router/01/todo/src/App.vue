<template>
  <div id="app">
    <AddTodo @add-todo="addTodo" />
    <TodoList :todos="todos" @toggle="toggleHandler" />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    TodoList,
  },
  data: function () {
    return {
      todos: [
        {
          complated: false,
          text: "1111",
          id: 1,
        },
        {
          complated: true,
          text: "2222",
          id: 2,
        },
        {
          complated: false,
          text: "4444",
          id: 4,
        },
      ],
    };
  },

  methods: {
    toggleHandler: function (id) {
      //   console.log(a);
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complated: !todo.complated };
        }

        return { ...todo };
      });
    },
    addTodo: function (text) {
      console.log(text);
      this.todos.push({
        text,
        compalted: false,
        id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0,
      });
    },
  },
};
</script>

<style>
</style>
