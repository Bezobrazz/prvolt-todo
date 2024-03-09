import { useDispatch } from "react-redux";
import { setVisibilityFilter } from "../redux/todoSlice";
const Filter = () => {
  const dispatch = useDispatch();

  return (
    <details className="dropdown">
      <summary className="m-1 btn">Filter ToDo</summary>
      <ul className="px-2  shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a onClick={() => dispatch(setVisibilityFilter("all"))}>All</a>
        </li>
        <li>
          <a onClick={() => dispatch(setVisibilityFilter("completed"))}>
            Completed
          </a>
        </li>
        <li>
          <a onClick={() => dispatch(setVisibilityFilter("current"))}>
            Current
          </a>
        </li>
      </ul>
    </details>
  );
};

export default Filter;
