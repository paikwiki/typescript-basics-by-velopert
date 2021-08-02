import React from "react";
import "./TodoItem.css";

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  key: number;
}

function TodoItem({ todo, key }: TodoItemProps) {
  return (
    <li key={key} className={`TodoItem ${todo.done ? 'done' : ''}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(X)</span>
    </li>
  );
}

export default TodoItem;
