import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers";
interface Props {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: Props) {
  const dispath = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);
  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispath({ type: "ADD_TODO", text: todoValue });
    setTodoValue("");
  };

  return (
    <div className="App">
      <div style={{ marginBottom: "50px" }}>
        Clicked : {counter} times
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <li style={{ textAlign: "center" }} key={index}>
              {todo}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
