import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div>
        <h2>Todo</h2>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
