import React from "react";
import "./TodoItem.scss";

export default function TodoItem({ todo, delTodo }) {
  function changeHandler(e) {
    console.log(e.target.checked);
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.complated}
        onChange={changeHandler}
      />
      <span>{todo.text}</span>
      <del onClick={() => delTodo(todo.id)}>X</del>
    </li>
  );
}
