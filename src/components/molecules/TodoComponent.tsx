import { Todo } from '@/redux/todo/slice';
import { ButtonComponent } from '../atoms/ButtonComponent';

export type Props = {
  todo: Todo;
  onClickRemove: (todo: Todo) => void;
  onClickToggle: (todo: Todo) => void;
};

export const TodoComponent: React.FC<Props> = (props) => {
  const { todo, onClickRemove, onClickToggle } = props;
  return (
    <>
      <div>
        {todo.title} : {todo.isCompleted ? 'Completed!' : 'Uncompleted'}
      </div>
      <ButtonComponent
        type='button'
        text={todo.isCompleted ? 'Uncompleted' : 'Complete'}
        onClick={() => onClickToggle(todo)}
      />
      <ButtonComponent type='button' text='Remove' onClick={() => onClickRemove(todo)} />
    </>
  );
};
