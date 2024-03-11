import { useSelector } from "react-redux";
import { selectTodos } from "../redux/selectors.jsx";
import { useState, useEffect } from "react";

const Counter = () => {
  const todos = useSelector(selectTodos);
  const [completedCount, setCompletedCount] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const completedTodos = todos.filter((todo) => todo.completed);
    const activeTodos = todos.filter((todo) => !todo.completed);
    setCompletedCount(completedTodos.length);
    setActiveCount(activeTodos.length);
  }, [todos]);

  return (
    <>
      <div className="badge badge-primary">Active Todos: {activeCount}</div>
      <div className="badge badge-accent">
        Completed Todos: {completedCount}
      </div>
    </>
  );
};

export default Counter;
