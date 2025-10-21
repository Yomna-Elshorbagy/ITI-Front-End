import { createSlice } from "@reduxjs/toolkit";

const TodosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleCompleteOrNot: (state, action) => {
      const id = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setTodosFromStorage: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleteOrNot, setTodosFromStorage } =
  TodosSlice.actions;
export default TodosSlice.reducer;
