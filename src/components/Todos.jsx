import { selectTodos, selectVisibilityFilter } from "../redux/selectors.jsx";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoSlice.jsx";

const Todos = () => {
  const todos = useSelector(selectTodos);
  const visibilityFilter = useSelector(selectVisibilityFilter);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (e, id) => {
    if (e.target !== e.currentTarget) {
      dispatch(toggleTodo(id));
    }
  };

  const filteredTodos = () => {
    switch (visibilityFilter) {
      case "Completed":
        return todos.filter((todo) => todo.completed);
      case "Current":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };
  return (
    <>
      {filteredTodos().map((todo) => (
        <li
          onClick={(e) => handleToggleTodo(e, todo.id)}
          key={todo.id}
          className={`border rounded-lg pl-4 pr-2 py-2 active:scale-95 ${
            todo.completed
              ? // ? "bg-green-50 hover:bg-green-100"
                // : "bg-slate-50 hover:bg-slate-100"
                "bg-primary hover:bg-violet-500"
              : "bg-slate-50 hover:bg-slate-100"
          } mb-2 cursor-pointer transition `}
        >
          <div className="flex justify-between items-center gap-2">
            <p
              className={`text-gray-500 overflow-auto ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </p>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="text-gray-500 cursor-pointer p-2 border border-transparent transition hover:border-red-300 hover:bg-red-300 rounded-md hover:text-red-500"
            >
              Delete
              {/* <BsTrashFill />{" "} */}
            </button>
          </div>
        </li>
      ))}
    </>
  );
};

export default Todos;
