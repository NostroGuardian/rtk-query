import { createApi } from '@reduxjs/toolkit/query/react';

import { makeRequest } from '@/shared/api';

import type { IAllUsersDTO } from '../model/allUsersDto';

export const usersApi = createApi({
  baseQuery: makeRequest(),
  endpoints: (build) => ({
    getAllUsers: build.query<IAllUsersDTO, void>({
      query: () => ({ url: 'users' }),
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
