import { createApi } from '@reduxjs/toolkit/query/react';

import { makeRequest } from '@/shared/api';

import type { IAllRecipesDto } from '../model/allRecipesDto';
import type { IAllUsersDTO } from '../model/allUsersDto';

export const usersApi = createApi({
  baseQuery: makeRequest(),
  endpoints: (build) => ({
    getAllUsers: build.query<IAllUsersDTO, void>({
      query: () => ({ url: 'users' }),
    }),

    getRecipes: build.query<IAllRecipesDto, { skip: number; limit: number }>({
      query: ({ skip, limit }) => ({ url: `recipes?limit=${limit}&skip=${skip}` }),
    }),
  }),
});

export const { useGetAllUsersQuery, useGetRecipesQuery } = usersApi;
