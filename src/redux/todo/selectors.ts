import { useSelector } from 'react-redux';
import { TodoState } from './slice';

export const useTodoState = (): TodoState => useSelector((state: { todo: TodoState }) => state.todo);
