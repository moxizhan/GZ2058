import "./App.css";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { text: "学习react", complated: true, id: 1 },
        { text: "学习react-router", complated: false, id: 4 },
        { text: "学习react-create-app", complated: true, id: 2 },
      ],
      filters: ["All", "Active", "Completed"],
      currentFilter: "All",
    };
  }

  addTodo = (n) => {
    // console.log('addTodo', n);
    const id = this.state.todos.length
      ? Math.max(...this.state.todos.map((item) => item.id)) + 1
      : 1;
    this.setState((state) => ({
      todos: [...state.todos, { text: n, conplated: false, id }],
    }));
  };

  delTodo = (n) => {
    // console.log('delTodo', n);
    this.setState((state) => ({
      todos: state.todos.filter((item) => item.id !== n),
    }));
  };

  changeFilter = (filter) => {
    console.log(filter);
    this.setState({ currentFilter: filter });
  };

  render() {
    let todos;
    switch (this.state.currentFilter) {
      case "Active":
        todos = this.state.todos.filter((todo) => !todo.complated);
        console.log(todos);
        break;
      case "Completed":
        todos = this.state.todos.filter((todo) => todo.complated);
        break;
      default:
        todos = this.state.todos;
        break;
    }

    return (
      <div className="App">
        <NewTodo addTodo={this.addTodo} />
        <TodoList todos={todos} delTodo={this.delTodo} />
        <TodoFilter
          currentFilter={this.state.currentFilter}
          filters={this.state.filters}
          changeFilter={this.changeFilter}
        />
      </div>
    );
  }
}

/*

  App
  --AddTodo
  --TodoList
    --TodoItem
  --TodoFilter
*/
