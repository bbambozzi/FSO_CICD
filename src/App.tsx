import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <div className="main-title">
        <h1>Todo list!</h1>
      </div>
      <div className="todo-list">
        <TodoList />
      </div>
    </div>
  );
};
export default App;
