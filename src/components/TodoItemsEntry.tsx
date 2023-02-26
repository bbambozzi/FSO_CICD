import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
interface TodoItemsEntryProps {
  items: string[];
  setItems: (itemsToSet: string[]) => void;
}

const TodoItemsEntry = ({ setItems, items }: TodoItemsEntryProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleNewTodoItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleNewTodoItem}>
        <label>
          Add todo note!
          <input type="text" onChange={handleInputChange} value={inputValue} />
        </label>
        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default TodoItemsEntry;
