import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '@/redux/todo/slice';
import { ButtonComponent } from '../atoms/ButtonComponent';

export const TodoFormComponent: React.FC = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const addTodo = (title: string) => {
    dispatch(add(title));
    setTitle('');
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(title);
      }}
    >
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      <ButtonComponent type='button' text='追加' onClick={() => addTodo(title)}></ButtonComponent>
    </form>
  );
};
