import { ButtonComponent } from '@/components/atoms/ButtonComponent';
import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import { useLoginMutation } from '@/redux/auth/slice';

const LoginPage: NextPage = () => {
  const [userName, setUserName] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  // result, error, isUninitialized, isLoading, isSuccess, isError
  const [login, { isLoading, isError, isSuccess, status }] = useLoginMutation();

  const onClickLogin = async () => {
    const data = {
      userName: userName,
      password: 'pass1234',
    };
    try {
      await login(data).unwrap();
      alert('loginに成功しました');
    } catch (e) {
      alert('loginに失敗しました');
    }
  };

  return (
    <div className='App'>
      <input type='text' name='userName' placeholder='john' value={userName} onChange={inputHandler} />
      <div>
        <ButtonComponent type='button' text='Login' onClick={onClickLogin} />
        <div>status: {status}</div>
        <div>isSuccess: {isSuccess ? 'true' : 'false'}</div>
        <div>isError: {isError ? 'true' : 'false'}</div>
        <div>isLoading: {isLoading ? 'true' : 'false'}</div>
      </div>
      <Link href='./'>戻る</Link>
    </div>
  );
};

export default LoginPage;
