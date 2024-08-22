import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IArticleResponse } from '../../types';
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
    })
  })
});

export const { useGetArticlesQuery } = articleApiSlice;
