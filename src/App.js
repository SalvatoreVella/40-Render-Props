import React from "react";
import TodoList from "./TodoList"

function App() {
  return (
    <TodoList render={(items, handleDeleteTodo) => {
      console.log(items);
      return (
      <ul>
        {items.map((item) => {
            return (
                    <li key={item.key}>{item.description} <span>{item.done ? "Completato" : ""}</span> <button id={item.key} onClick={handleDeleteTodo}>Delete Todo</button></li>
            )
        })}
    </ul>)
    }}></TodoList>
  );
}

export default App;
