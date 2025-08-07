/* eslint-disable no-console */
import axios, { isAxiosError } from 'axios';

import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, Method } from 'axios';

const makeRequest =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: import.meta.env.VITE_API_BASE_URL }
  ): BaseQueryFn<{
    url: string;
    method?: Method;
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
    headers?: AxiosRequestConfig['headers'];
  }> =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });

      return { data: result.data };
    } catch (error) {
      if (isAxiosError(error)) {
        return {
          error: {
            status: error.response?.status,
            data: error.response?.data ?? error.message,
          },
        };
      }

      if (import.meta.env.DEV) {
        console.error('Unhandled error in makeRequest:', error);
      }

      return {
        error: {
          status: 500,
          data: 'Unexpected error',
        },
      };
    }
  };

export default makeRequest;
