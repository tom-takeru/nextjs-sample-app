import { useSelector } from 'react-redux';
import { CharacterState } from './slice';

export const useCharacterState = (): CharacterState =>
  useSelector((state: { character: CharacterState }) => state.character);
