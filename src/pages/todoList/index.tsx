import { TodoFormComponent } from '@/components/organisms/TodoFormComponent';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import TodoListComponent from '../../components/organisms/TodoListComponent';

const TodoListPage: NextPage = () => {
  return (
    <>
      <div className='underline'>Todoリスト</div>
      <div>新規Todo作成</div>
      <TodoFormComponent />
      <TodoListComponent />
      <Link href='./'>戻る</Link>
    </>
  );
};

export default TodoListPage;
