import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi, authSlice } from './auth/slice';
import { characterSlice } from './character/slice';
import { todoSlice } from './todo/slice';

const rootReducer = {
  character: characterSlice.reducer,
  todo: todoSlice.reducer,
  auth: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);
