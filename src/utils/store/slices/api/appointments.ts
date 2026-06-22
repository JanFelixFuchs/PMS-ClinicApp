import type { Dayjs } from 'dayjs';
import { apiRoutes } from '../../../api/apiRoutes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateAppointmentInputModel,
  UpdateAppointmentInputModel,
} from '../../../types/inputModels/AppointmentInputModels';
import type {
  AppointmentDetailedOutputModel,
  AppointmentOverviewOutputModel,
} from '../../../types/outputModels/AppointmentOutputModels';
import { api } from '../api';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';

export const appointmentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createAppointment: builder.mutation<
      AppointmentDetailedOutputModel,
      CreateAppointmentInputModel
    >({
      query: (createAppointmentInputModel) => ({
        url: apiRoutes.createUser(),
        method: HttpMethod.POST,
        body: createAppointmentInputModel,
      }),
      transformResponse: transformHttpResult<AppointmentDetailedOutputModel>,
      invalidatesTags: (_result, error) =>
        !error ? [{ type: rtkTagTypes.appointment, id: rtkIdTypes.list }] : [],
    }),

    getAppointments: builder.query<
      AppointmentOverviewOutputModel[],
      { startDate: Dayjs; endDate: Dayjs }
    >({
      query: ({ startDate, endDate }) => ({
        url: apiRoutes.getAppointments(startDate, endDate),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<AppointmentOverviewOutputModel[]>,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: rtkTagTypes.appointment,
                id,
              })),
              { type: rtkTagTypes.appointment, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getAppointment: builder.query<AppointmentDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.getAppointment(id),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<AppointmentDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.appointment, id }] : [],
    }),

    updateAppointment: builder.mutation<
      AppointmentDetailedOutputModel,
      { id: string; updateAppointmentInputModel: UpdateAppointmentInputModel }
    >({
      query: ({ id, updateAppointmentInputModel }) => ({
        url: apiRoutes.updateAppointment(id),
        method: HttpMethod.PUT,
        body: updateAppointmentInputModel,
      }),
      transformResponse: transformHttpResult<AppointmentDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.appointment, id },
              { type: rtkTagTypes.appointment, id: rtkIdTypes.list },
            ]
          : [],
    }),

    markAppointmentAsAttended: builder.mutation<
      AppointmentDetailedOutputModel,
      string
    >({
      query: (id) => ({
        url: apiRoutes.markAppointmentAsAttended(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<AppointmentDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.appointment, id },
              { type: rtkTagTypes.appointment, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteAppointment: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteAppointment(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.appointment, id },
              { type: rtkTagTypes.appointment, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateAppointmentMutation,
  useGetAppointmentsQuery,
  useGetAppointmentQuery,
  useUpdateAppointmentMutation,
  useMarkAppointmentAsAttendedMutation,
  useDeleteAppointmentMutation,
} = appointmentApi;
