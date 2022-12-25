import React, { useState } from "react";
import "../App.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleClick = () => {
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(el) => {
          setTodo(el.target.value);
        }}
        value={todo}
      />
      <button onClick={handleClick}>Add</button>
      {todoList.map((el) => (
        <div key={el}>{el}</div>
      ))}
    </>
  );
};

export default Todo;
