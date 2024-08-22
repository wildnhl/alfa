import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector
} from 'react-redux';
import { articleApiSlice } from './api/articleApi';
import { articleReducer } from './slices/articleSlice';
export const store = configureStore({
  reducer: {
    [articleApiSlice.reducerPath]: articleApiSlice.reducer,
    article: articleReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApiSlice.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
