import { createSlice } from '@reduxjs/toolkit';
import type { IArticle } from '../../types';

interface IState {
  data: IArticle[];
}

const initialState: IState = {
  data: []
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setArticles } = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
