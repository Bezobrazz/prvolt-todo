import { BsTrashFill } from "react-icons/bs";
import { selectTodos } from "../redux/selectors.jsx";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../redux/todoSlice.jsx";

const Todos = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      {todos
        .slice(0)
        .reverse()
        .map((todo) => (
          <li
            key={todo.id}
            className="border rounded-lg pl-4 pr-2 py-2 bg-slate-50 mb-2 cursor-pointer transition hover:bg-slate-100"
          >
            <div className="flex justify-between items-center">
              <p className=" text-gray-500 ">{todo.text}</p>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="text-gray-500 cursor-pointer p-2 border border-transparent transition hover:border-red-300 hover:bg-red-300 rounded-md hover:text-red-500"
              >
                <BsTrashFill />{" "}
              </button>
            </div>
          </li>
        ))}
    </>
  );
};

export default Todos;
