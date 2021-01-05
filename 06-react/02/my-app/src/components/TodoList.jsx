import React from "react";

import TodoItem from "../components/TodoItem";

export default function TodoList(props) {
  return (
    <ul style={{ margin: 0, padding: 0 }}>
      {props.todos.map((item) => (
        <TodoItem key={item.id} todo={item} delTodo={props.delTodo} />
      ))}
    </ul>
  );
}
