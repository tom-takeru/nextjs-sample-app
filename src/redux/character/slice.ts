import { createSlice } from '@reduxjs/toolkit';

export type CharacterState = {
  value: string;
};

const initialState: CharacterState = {
  value: '-',
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setA: (state) => {
      state.value = 'A';
    },
    setB: (state) => {
      state.value = 'B';
    },
    setC: (state) => {
      state.value = 'C';
    },
  },
});

export const { setA, setB, setC } = characterSlice.actions;
