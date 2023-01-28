import { ButtonComponent } from '@/components/atoms/ButtonComponent';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useLoginMutation } from '@/redux/auth/slice';
import { LinkComponent } from '@/components/atoms/LinkComponent';

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
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='App'>
      <div>john succeeds, others fail</div>
      <div>It takes 3 seconds to return the result</div>
      <input type='text' name='userName' placeholder='john' value={userName} onChange={inputHandler} />
      <ButtonComponent type='button' text='Login' onClick={onClickLogin} />
      <div>
        <div>status: {status}</div>
        <div>isSuccess: {isSuccess ? 'true' : 'false'}</div>
        <div>isError: {isError ? 'true' : 'false'}</div>
        <div>isLoading: {isLoading ? 'true' : 'false'}</div>
      </div>
    </div>
  );
};

export default LoginPage;
