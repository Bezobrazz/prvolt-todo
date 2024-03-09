import { selectTodos } from "../redux/selectors.jsx";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

const List = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul className="w-full border rounded-md p-2 h-1/2 ">
      {todos.map((todo) => (
        <li key={nanoid()} className="border rounded-lg p-2 bg-yellow-100 mb-2">
          <p>{todo}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
