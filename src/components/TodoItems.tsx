interface TodoItemsProps {
  items: string[];
  setItems: (value: Array<string>) => void;
}

const TodoItems = ({ items, setItems }: TodoItemsProps): JSX.Element => {
  const handleDoneItem = (index: number): void => {
    setItems(items.filter((item, ind) => ind !== index));
  };
  if (items.length < 1) {
    return (
      <div>
        <h2>No items in the todo list!</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Items to do</h2>
        <ul style={{ padding: "1vh" }}>
          {items.map((item, index) => {
            return (
              <li key={index}>
                {item}{" "}
                <button
                  onClick={() => {
                    handleDoneItem(index);
                  }}
                >
                  done!
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default TodoItems;
