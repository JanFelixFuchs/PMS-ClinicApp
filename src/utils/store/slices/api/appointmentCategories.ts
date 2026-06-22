import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateAppointmentCategoryInputModel,
  UpdateAppointmentCategoryInputModel,
} from '../../../types/inputModels/AppointmentCategoryInputModels';
import type {
  AppointmentCategoryDetailedOutputModel,
  AppointmentCategoryOverviewOutputModel,
} from '../../../types/outputModels/AppointmentCategoryOutputModels';
import { api } from '../api';

export const appointmentCategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createAppointmentCategory: builder.mutation<
      AppointmentCategoryDetailedOutputModel,
      CreateAppointmentCategoryInputModel
    >({
      query: (createAppointmentCategoryInputModel) => ({
        url: apiRoutes.createAppointmentCategory(),
        method: HttpMethod.POST,
        body: createAppointmentCategoryInputModel,
      }),
      transformResponse:
        transformHttpResult<AppointmentCategoryDetailedOutputModel>,
      invalidatesTags: (_result, error) =>
        !error
          ? [{ type: rtkTagTypes.appointmentCategory, id: rtkIdTypes.list }]
          : [],
    }),

    getAppointmentCategories: builder.query<
      AppointmentCategoryOverviewOutputModel[],
      void
    >({
      query: () => ({
        url: apiRoutes.getAppointmentCategories(),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<
        AppointmentCategoryOverviewOutputModel[]
      >,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: rtkTagTypes.appointmentCategory,
                id,
              })),
              { type: rtkTagTypes.appointmentCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getAppointmentCategory: builder.query<
      AppointmentCategoryDetailedOutputModel,
      string
    >({
      query: (id) => ({
        url: apiRoutes.getAppointmentCategory(id),
        method: HttpMethod.GET,
      }),
      transformResponse:
        transformHttpResult<AppointmentCategoryDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.appointmentCategory, id }] : [],
    }),

    updateAppointmentCategory: builder.mutation<
      AppointmentCategoryDetailedOutputModel,
      {
        id: string;
        updateAppointmentCategoryInputModel: UpdateAppointmentCategoryInputModel;
      }
    >({
      query: ({ id, updateAppointmentCategoryInputModel }) => ({
        url: apiRoutes.updateAppointmentCategory(id),
        method: HttpMethod.PUT,
        body: updateAppointmentCategoryInputModel,
      }),
      transformResponse:
        transformHttpResult<AppointmentCategoryDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.appointmentCategory, id },
              { type: rtkTagTypes.appointmentCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteAppointmentCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteAppointmentCategory(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.appointmentCategory, id },
              { type: rtkTagTypes.appointmentCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateAppointmentCategoryMutation,
  useGetAppointmentCategoriesQuery,
  useGetAppointmentCategoryQuery,
  useUpdateAppointmentCategoryMutation,
  useDeleteAppointmentCategoryMutation,
} = appointmentCategoryApi;
