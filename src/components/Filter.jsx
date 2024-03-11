import { useDispatch } from "react-redux";
import { setVisibilityFilter } from "../redux/todoSlice";
import { useRef } from "react";
const Filter = () => {
  const detailsRef = useRef(null);
  const dispatch = useDispatch();

  const handleOptionClick = (filter) => {
    dispatch(setVisibilityFilter(filter));
    detailsRef.current.removeAttribute("open");
  };

  return (
    <details ref={detailsRef} className="dropdown">
      <summary className="m-1 btn">Filter ToDo</summary>
      <ul className="px-2  shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a onClick={() => handleOptionClick("all")}>All</a>
        </li>
        <li>
          <a onClick={() => handleOptionClick("completed")}>Completed</a>
        </li>
        <li>
          <a onClick={() => handleOptionClick("current")}>Current</a>
        </li>
      </ul>
    </details>
  );
};

export default Filter;
