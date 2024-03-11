import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  todos: [],
  visibilityFilter: "All",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: nanoid(), text: action.payload, completed: false };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, setVisibilityFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
