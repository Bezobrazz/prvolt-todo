import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 3) {
      setError("Input value must be at least 3 characters long");
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue("");
    setError("");
  };

  return (
    <div className="w-full gap-2">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-center w-full gap-2 sm:justify-center sm:flex sm:flex-row mb-10"
      >
        <input
          value={inputValue}
          type="text"
          placeholder="Type here your ToDo"
          className="input border input-bordered w-full max-w-xs "
          onChange={handleInput}
        />
        <button className="btn btn-primary">Add ToDo</button>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default Input;
