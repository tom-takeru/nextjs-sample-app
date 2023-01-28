import { LinkComponent } from '@/components/atoms/LinkComponent';
import { TodoFormComponent } from '@/components/organisms/TodoFormComponent';
import { NextPage } from 'next';
import React from 'react';
import TodoListComponent from '../../components/organisms/TodoListComponent';

const TodoListPage: NextPage = () => {
  return (
    <>
      <div className='underline'>TodoList</div>
      <TodoFormComponent />
      <TodoListComponent />
    </>
  );
};

export default TodoListPage;
