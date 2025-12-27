import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { API_BASE_URL } from '../config/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get('access_token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    validateSSOToken: builder.mutation({
      query: (token) => ({
        url: '/auth/validateSSOToken',
        method: 'POST',
        body: { token },
      }),
      providesTags: ['Auth'],
    }),
  }),
});

export const { useValidateSSOTokenMutation } = authApi;