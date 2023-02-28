import "./App.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducers";
import { Post } from "./reducers/posts";
import { fetchPosts } from "./actions/posts";
interface Props {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({ value, onIncrement, onDecrement }: Props) {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todos);
  const posts: Post[] = useSelector((state: RootState) => state.posts);

  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", text: todoValue });
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

      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
