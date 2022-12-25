import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, delTodos, removeTodos } from "../action";

export const Todos = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todo.todoList);
  console.log(todoState);

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
      <button
        onClick={() => dispatch(addTodos(todo), setTodo(""))}
      >
        Add
      </button>
      {todoState.map((el) => (
        <div key={el.id}>
            <div>{el.data}</div>
            <button onClick={() => dispatch(delTodos(el.id))}>Delete</button>
        </div>
      ))}
      <button onClick={() => {dispatch(removeTodos())}}>Remove</button>
    </>
  );
};
