import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { rtkTagTypes } from '../../api/rtkTagTypes';
import type { RootState } from '../configureStore';
import { HttpMethod } from '../../types/api/HttpMethod';
import { apiRoutes } from '../../api/apiRoutes';
import type { HttpResult } from '../../types/api/HttpResult';
import type { RefreshTokensOutputModel } from '../../types/outputModels/AuthOutputModels';
import { login, logout } from './identity';
import type { BaseQuery } from '../../types/rtk/BaseQuery';

// extracting base url from environment variables
const baseUrl = import.meta.env.VITE_API_BASE_URL;

// query for public endpoints
const publicQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
});

// query for private endpoints
const privateQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    // extracting access token from store
    const accessToken = (getState() as RootState).identity.accessToken;

    // setting authorization header and returning headers
    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
    return headers;
  },
});

// base query
const baseQuery: BaseQuery = async (args, api, extraOptions) => {
  // executing public query if public flag is set
  if (extraOptions?.public) return publicQuery(args, api, extraOptions);

  // executing private query
  let result = await privateQuery(args, api, extraOptions);

  // refreshing tokens if unauthorized
  if (result.error?.status === 401) {
    // calling endpoint for refreshing tokens
    const refreshResult = await publicQuery(
      { url: apiRoutes.refreshTokens(), method: HttpMethod.POST },
      api,
      extraOptions
    );

    // checking if result contains data
    if (refreshResult.data) {
      // extracting payload
      const { payload } =
        refreshResult.data as HttpResult<RefreshTokensOutputModel>;

      // checking if payload is empty
      if (!payload) {
        api.dispatch(logout());
        return result;
      }

      // storing new access token in store
      api.dispatch(login({ ...payload }));

      // repeating orginal request
      result = await privateQuery(args, api, extraOptions);
    } else {
      // logging out user
      api.dispatch(logout());
    }
  }

  // returning result
  return result;
};

// creating rtk api service
export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: Object.values(rtkTagTypes),
  endpoints: () => ({}),
});
