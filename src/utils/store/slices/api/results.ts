import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type { CreateResultInputModel } from '../../../types/inputModels/ResultInputModels';
import type { ResultDetailedOutputModel } from '../../../types/outputModels/ResultOutputModels';
import { api } from '../api';

export const resultApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createResult: builder.mutation<
      ResultDetailedOutputModel,
      CreateResultInputModel
    >({
      query: (createResultInputModel) => ({
        url: apiRoutes.createResult(),
        method: HttpMethod.POST,
        body: createResultInputModel,
      }),
      transformResponse: transformHttpResult<ResultDetailedOutputModel>,
      invalidatesTags: (_result, error) =>
        !error ? [{ type: rtkTagTypes.result, id: rtkIdTypes.list }] : [],
    }),

    getResult: builder.query<ResultDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.getResult(id),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<ResultDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.result, id }] : [],
    }),

    deleteResult: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteResult(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error ? [{ type: rtkTagTypes.result, id }] : [],
    }),
  }),
});

export const {
  useCreateResultMutation,
  useGetResultQuery,
  useDeleteResultMutation,
} = resultApi;
