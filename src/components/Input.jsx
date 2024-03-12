import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div className="w-full gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center w-full gap-2 sm:justify-center sm:flex sm:flex-row mb-10"
      >
        <input
          value={text}
          type="text"
          placeholder="Type here you ToDo"
          className="input border input-bordered w-full max-w-xs "
          onChange={handleInput}
        />
        <button className="btn btn-primary">Add ToDo</button>
      </form>
    </div>
  );
};

export default Input;
