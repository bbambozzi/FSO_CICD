import { useState } from "react";
import TodoItems from "./TodoItems";
import TodoItemsEntry from "./TodoItemsEntry";

const TodoList = (): JSX.Element => {
  const [items, setItems] = useState(["say hello"]);
  return (
    <div>
      <TodoItemsEntry setItems={setItems} items={items} />
      <TodoItems items={items} setItems={setItems} />
    </div>
  );
};

export default TodoList;
