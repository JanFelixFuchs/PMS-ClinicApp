import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateClinicianCategoryInputModel,
  UpdateClinicianCategoryInputModel,
} from '../../../types/inputModels/ClinicianCategoryInputModels';
import type {
  ClinicianCategoryDetailedOutputModel,
  ClinicianCategoryOverviewOutputModel,
} from '../../../types/outputModels/ClinicianCategoryOutputModels';
import { api } from '../api';

export const clinicianCategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createClinicianCategory: builder.mutation<
      ClinicianCategoryDetailedOutputModel,
      CreateClinicianCategoryInputModel
    >({
      query: (createClinicianCategoryInputModel) => ({
        url: apiRoutes.createClinicianCategory(),
        method: HttpMethod.POST,
        body: createClinicianCategoryInputModel,
      }),
      transformResponse:
        transformHttpResult<ClinicianCategoryDetailedOutputModel>,
      invalidatesTags: (_result, error) =>
        !error
          ? [{ type: rtkTagTypes.clinicianCategory, id: rtkIdTypes.list }]
          : [],
    }),

    getClinicianCategories: builder.query<
      ClinicianCategoryOverviewOutputModel[],
      void
    >({
      query: () => ({
        url: apiRoutes.getClinicianCategories(),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<
        ClinicianCategoryOverviewOutputModel[]
      >,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: rtkTagTypes.clinicianCategory,
                id,
              })),
              { type: rtkTagTypes.clinicianCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getClinicianCategory: builder.query<
      ClinicianCategoryDetailedOutputModel,
      string
    >({
      query: (id) => ({
        url: apiRoutes.getClinicianCategory(id),
        method: HttpMethod.GET,
      }),
      transformResponse:
        transformHttpResult<ClinicianCategoryDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.clinicianCategory, id }] : [],
    }),

    updateClinicianCategory: builder.mutation<
      ClinicianCategoryDetailedOutputModel,
      {
        id: string;
        updateClinicianCategoryInputModel: UpdateClinicianCategoryInputModel;
      }
    >({
      query: ({ id, updateClinicianCategoryInputModel }) => ({
        url: apiRoutes.updateClinicianCategory(id),
        method: HttpMethod.PUT,
        body: updateClinicianCategoryInputModel,
      }),
      transformResponse:
        transformHttpResult<ClinicianCategoryDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.clinicianCategory, id },
              { type: rtkTagTypes.clinicianCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteClinicianCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteClinicianCategory(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.clinicianCategory, id },
              { type: rtkTagTypes.clinicianCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateClinicianCategoryMutation,
  useGetClinicianCategoriesQuery,
  useGetClinicianCategoryQuery,
  useUpdateClinicianCategoryMutation,
  useDeleteClinicianCategoryMutation,
} = clinicianCategoryApi;
