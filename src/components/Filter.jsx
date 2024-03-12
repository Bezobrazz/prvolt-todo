import { useDispatch } from "react-redux";
import { setVisibilityFilter } from "../redux/todoSlice";
import { useRef, useState } from "react";

const Filter = () => {
  const detailsRef = useRef(null);
  const dispatch = useDispatch();
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleOptionClick = (filter) => {
    dispatch(setVisibilityFilter(filter));
    setSelectedFilter(filter);
    detailsRef.current.removeAttribute("open");
  };

  return (
    <details ref={detailsRef} className="dropdown ">
      <summary className="m-1 btn">{selectedFilter || "ToDo Filter"}</summary>
      <ul className="px-2  shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a onClick={() => handleOptionClick("All")}>All</a>
        </li>
        <li>
          <a onClick={() => handleOptionClick("Completed")}>Completed</a>
        </li>
        <li>
          <a onClick={() => handleOptionClick("Current")}>Current</a>
        </li>
      </ul>
    </details>
  );
};

export default Filter;
