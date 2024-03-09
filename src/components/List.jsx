import { selectTodos } from "../redux/selectors.jsx";
import { useSelector } from "react-redux";
import Todos from "./Todos.jsx";

const List = () => {
  const todos = useSelector(selectTodos);
  return (
    <ul className="w-full border rounded-md p-4 h-1/2 overflow-y-auto">
      {todos.length === 0 && (
        <li className="text-4xl text-center text-gray-300 flex justify-center items-center h-full">
          <p>add something to see the list</p>
        </li>
      )}
      <Todos />
    </ul>
  );
};

export default List;
