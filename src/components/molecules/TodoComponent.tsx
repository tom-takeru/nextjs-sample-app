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
        {todo.title} : {todo.isCompleted ? '完了' : '未完了'}
      </div>
      <ButtonComponent type='button' text={todo.isCompleted ? '戻す' : '完了'} onClick={() => onClickToggle(todo)} />
      <ButtonComponent type='button' text='削除' onClick={() => onClickRemove(todo)} />
    </>
  );
};
