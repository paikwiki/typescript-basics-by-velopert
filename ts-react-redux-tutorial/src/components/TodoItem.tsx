import { Todo } from "../modules/todos";

type TodoItemProps = {
  todo: Todo;
};

function TodoItem({ todo }: TodoItemProps) {
  // TODO: onToggle/ onRemove with custom hook
  return (
    <li className={`TodoItem ${todo.done ? "done" : ""}`}>
      <span className="text">{todo.text}</span>
      <span className="remove">(X)</span>
    </li>
  );
}

export default TodoItem;