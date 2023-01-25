import { ButtonComponent } from '@/components/atoms/ButtonComponent';
import { useDispatch } from 'react-redux';
import { useCharacterState } from '@/redux/character/selectors';
import { setA, setB, setC } from '@/redux/character/slice';

export const CharacterSelectComponent: React.FC = () => {
  const dispatch = useDispatch();
  const characterState = useCharacterState();

  return (
    <>
      <div>選んだ1文字表示</div>
      <ButtonComponent type='button' text='A' onClick={() => dispatch(setA())} />
      <ButtonComponent type='button' text='B' onClick={() => dispatch(setB())} />
      <ButtonComponent type='button' text='C' onClick={() => dispatch(setC())} />
      <div>あなたが選んだ文字：{characterState.value}</div>
    </>
  );
};
