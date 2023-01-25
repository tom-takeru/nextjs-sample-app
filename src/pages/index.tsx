import { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';

const MainPage: NextPage = () => {
  return (
    <>
      <div className='text-3xl font-bold underline'>Next.js, Redux, tailwindcssのサンプルページ</div>
      <div>
        <Link className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800' href='./characterSelect'>
          CharacterSelect
        </Link>
      </div>
      <div>
        <Link className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800' href='./todoList'>
          TodoList
        </Link>
      </div>
      <div>
        <Link className='text-blue-600 underline visited:text-purple-600 hover:text-blue-800' href='./login'>
          LoginSample
        </Link>
      </div>
    </>
  );
};

export default MainPage;
