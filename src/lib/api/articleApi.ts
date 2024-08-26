import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IArticleResponse, IArticle } from '../../types';
import { articlesEndpoint } from '../../api';
export const articleApiSlice = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v4/'
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<IArticleResponse, void>({
      query: () => ({
        url: articlesEndpoint,
        params: { limit: 9 }
      })
    }),
    getSingleArticle: builder.query<IArticle, string | undefined>({
      query: (id) => `${articlesEndpoint}${id}`
    })
  })
});

export const { useGetArticlesQuery, useGetSingleArticleQuery } =
  articleApiSlice;
