import React from "react";

export default function TodoFilter(props) {
  return (
    <div className="todo-filter">
      {props.filters.map((filter, index) => {
        return (
          <button
            style={props.currentFilter === filter ? { color: "red" } : null}
            key={index}
            onClick={() => props.changeFilter(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

// All Active Completed
