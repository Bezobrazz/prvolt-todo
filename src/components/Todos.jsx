import { BsTrashFill } from "react-icons/bs";
import { selectTodos } from "../redux/selectors.jsx";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoSlice.jsx";

const Todos = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (e, id) => {
    if (e.target !== e.currentTarget) {
      dispatch(toggleTodo(id));
    }
  };
  return (
    <>
      {todos
        .slice(0)
        .reverse()
        .map((todo) => (
          <li
            onClick={(e) => handleToggleTodo(e, todo.id)}
            key={todo.id}
            className={`border rounded-lg pl-4 pr-2 py-2 active:scale-95 ${
              todo.completed
                ? "bg-green-50 hover:bg-green-100 line-through"
                : "bg-slate-50 hover:bg-slate-100"
            } mb-2 cursor-pointer transition `}
          >
            <div className="flex justify-between items-center gap-2">
              <p className=" text-gray-500 overflow-auto">{todo.text}</p>
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
