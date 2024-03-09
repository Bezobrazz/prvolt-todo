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
    dispatch(addTodo({ id: Date.now(), text }));
    setText("");
  };
  return (
    <div className="w-full gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex w-full gap-2 justify-center"
      >
        <input
          value={text}
          type="text"
          placeholder="Type here you ToDo"
          className=" input border input-bordered w-full max-w-xs mb-10"
          onChange={handleInput}
        />
        <button className="btn btn-primary">Add To Do</button>
      </form>
    </div>
  );
};

export default Input;
