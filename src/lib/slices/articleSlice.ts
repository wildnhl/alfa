import { createSlice } from '@reduxjs/toolkit';
import type { IArticle } from '../../types';
import { articleApiSlice } from '../api/articleApi';
interface IState {
  data: IArticle[];
  isShowFavorite: boolean;
}

const initialState: IState = {
  data: [],
  isShowFavorite: false
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    deletArticle: (state, action) => {
      const findId = state.data.findIndex((el) => action.payload === el.id);
      state.data.splice(findId, 1);
    },
    addArticleToFavorites: (state, action) => {
      const find = state.data.find((el) => action.payload === el.id);
      if (find !== undefined) {
        find.isFavorite = true;
      }
    },
    changeShowFavorite: (state) => {
      state.isShowFavorite = !state.isShowFavorite;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      articleApiSlice.endpoints.getArticles.matchFulfilled,
      (state, action) => {
        const newData = action.payload.results.map((el) => ({
          ...el,
          isFavorite: false
        }));
        state.data = newData;
      }
    );
  }
});

export const { deletArticle, addArticleToFavorites, changeShowFavorite } =
  articleSlice.actions;
export const articleReducer = articleSlice.reducer;
