import React from 'react';
import { useDispatch } from 'react-redux';
import { useTodoState } from '@/redux/todo/selectors';
import { remove, Todo, toggle } from '@/redux/todo/slice';
import { TodoComponent } from '@/components/molecules/TodoComponent';

const TodoListComponent: React.FC = () => {
  const state = useTodoState();
  const dispatch = useDispatch();
  const removeTodo = (todo: Todo) => {
    dispatch(remove(todo));
  };
  const toggleTodo = (todo: Todo) => {
    dispatch(toggle(todo));
  };

  return (
    <>
      {state.todoList.map((todo: Todo) => {
        return (
          <React.Fragment key={todo.id}>
            <TodoComponent todo={todo} onClickRemove={removeTodo} onClickToggle={toggleTodo} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default TodoListComponent;
