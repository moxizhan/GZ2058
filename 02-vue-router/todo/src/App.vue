

<template>
  <!-- npm cache clean -->
  <div id="app">
    <AddTodo @add-todo="addTodo" />
    <TodoList
      :todos="currentTodos"
      @toggle="toggleHandler"
      @delete-todo="deleteTodo"
      @updata-todo="updataTodo"
    />

    <TodoFilter :filter="currentFilter" @change-filter="changeFilter" :left="activeTodos.length" />
  </div>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoList from "./components/TodoList.vue";
import TodoFilter from "./components/TodoFilter.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    TodoList,
    TodoFilter,
  },
  data: function () {
    return {
      currentFilter: "all",
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

  computed: {
    activeTodos: function () {
      return this.todos.filter((todo) => {
        return !todo.complated;
      });
    },

    complatedTodos: function () {
      return this.todos.filter((todo) => {
        return todo.complated;
      });
    },

    currentTodos: function () {
      switch (this.currentFilter) {
        case "active":
          return this.activeTodos;
        case "complated":
          return this.complatedTodos;
        default:
          return this.todos;
      }
    },
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

    deleteTodo: function (id) {
      console.log("deleteTodo", id);
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    updataTodo: function (id, newText) {
      // console.log("updateTodo", a, b);
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };

          // todo.text = newText
          // return todo
        }
        return todo;
      });
    },
    changeFilter: function (filter) {
      this.currentFilter = filter;
    },
  },
};
</script>

<style>
</style>
