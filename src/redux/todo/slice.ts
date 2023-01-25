import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uuid4 from 'uuid4';

export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type TodoState = {
  todoList: Todo[];
};

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, actions: PayloadAction<string>) => {
      state.todoList.push({
        id: uuid4(),
        title: actions.payload,
        isCompleted: false,
      });
      console.log('in add reducer');
    },
    remove: (state, actions: PayloadAction<Todo>) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== actions.payload.id);
    },
    toggle: (state, actions: PayloadAction<Todo>) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === actions.payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      );
    },
  },
});

export const { add, remove, toggle } = todoSlice.actions;
