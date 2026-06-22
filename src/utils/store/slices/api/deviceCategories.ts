import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateDeviceCategoryInputModel,
  UpdateDeviceCategoryInputModel,
} from '../../../types/inputModels/DeviceCategoryInputModels';
import type {
  DeviceCategoryDetailedOutputModel,
  DeviceCategoryOverviewOutputModel,
} from '../../../types/outputModels/DeviceCategoryOutputModels';
import { api } from '../api';

export const deviceCategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createDeviceCategory: builder.mutation<
      DeviceCategoryDetailedOutputModel,
      CreateDeviceCategoryInputModel
    >({
      query: (createDeviceCategoryInputModel) => ({
        url: apiRoutes.createDeviceCategory(),
        method: HttpMethod.POST,
        body: createDeviceCategoryInputModel,
      }),
      transformResponse: transformHttpResult<DeviceCategoryDetailedOutputModel>,
      invalidatesTags: (_result, error) =>
        !error
          ? [{ type: rtkTagTypes.deviceCategory, id: rtkIdTypes.list }]
          : [],
    }),

    getDeviceCategories: builder.query<
      DeviceCategoryOverviewOutputModel[],
      void
    >({
      query: () => ({
        url: apiRoutes.getDeviceCategories(),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<
        DeviceCategoryOverviewOutputModel[]
      >,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: rtkTagTypes.deviceCategory,
                id,
              })),
              { type: rtkTagTypes.deviceCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getDeviceCategory: builder.query<DeviceCategoryDetailedOutputModel, string>(
      {
        query: (id) => ({
          url: apiRoutes.getDeviceCategory(id),
          method: HttpMethod.GET,
        }),
        transformResponse:
          transformHttpResult<DeviceCategoryDetailedOutputModel>,
        providesTags: (result, _error, id) =>
          result ? [{ type: rtkTagTypes.deviceCategory, id }] : [],
      }
    ),

    updateDeviceCategory: builder.mutation<
      DeviceCategoryDetailedOutputModel,
      {
        id: string;
        updateDeviceCategoryInputModel: UpdateDeviceCategoryInputModel;
      }
    >({
      query: ({ id, updateDeviceCategoryInputModel }) => ({
        url: apiRoutes.updateDeviceCategory(id),
        method: HttpMethod.PUT,
        body: updateDeviceCategoryInputModel,
      }),
      transformResponse: transformHttpResult<DeviceCategoryDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.deviceCategory, id },
              { type: rtkTagTypes.deviceCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteDeviceCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteDeviceCategory(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.deviceCategory, id },
              { type: rtkTagTypes.deviceCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateDeviceCategoryMutation,
  useGetDeviceCategoriesQuery,
  useGetDeviceCategoryQuery,
  useUpdateDeviceCategoryMutation,
  useDeleteDeviceCategoryMutation,
} = deviceCategoryApi;
