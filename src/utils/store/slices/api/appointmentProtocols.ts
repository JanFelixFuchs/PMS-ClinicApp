import { apiRoutes } from '../../../api/apiRoutes';
import { rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type { UpdateAppointmentProtocolInputModel } from '../../../types/inputModels/AppointmentProtocolInputModels';
import type { AppointmentProtocolDetailedOutputModel } from '../../../types/outputModels/AppointmentProtocolOutputModels';
import { api } from '../api';

export const appointmentProtocolApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAppointmentProtocol: builder.query<
      AppointmentProtocolDetailedOutputModel,
      string
    >({
      query: (id) => ({
        url: apiRoutes.getAppointmentProtocol(id),
        method: HttpMethod.GET,
      }),
      transformResponse:
        transformHttpResult<AppointmentProtocolDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.appointmentProtocol, id }] : [],
    }),

    updateAppointmentProtocol: builder.mutation<
      AppointmentProtocolDetailedOutputModel,
      {
        id: string;
        updateAppointmentProtocolInputModel: UpdateAppointmentProtocolInputModel;
      }
    >({
      query: ({ id, updateAppointmentProtocolInputModel }) => ({
        url: apiRoutes.updateAppointmentProtocol(id),
        method: HttpMethod.PUT,
        body: updateAppointmentProtocolInputModel,
      }),
      transformResponse:
        transformHttpResult<AppointmentProtocolDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error ? [{ type: rtkTagTypes.appointmentProtocol, id }] : [],
    }),

    startAppointmentProtocol: builder.mutation<
      AppointmentProtocolDetailedOutputModel,
      string
    >({
      query: (id) => ({
        url: apiRoutes.startAppointmentProtocol(id),
        method: HttpMethod.PUT,
      }),
      transformResponse:
        transformHttpResult<AppointmentProtocolDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error ? [{ type: rtkTagTypes.appointmentProtocol, id }] : [],
    }),

    completeAppointmentProtocol: builder.mutation<
      AppointmentProtocolDetailedOutputModel,
      string
    >({
      query: (id) => ({
        url: apiRoutes.completeAppointmentProtocol(id),
        method: HttpMethod.PUT,
      }),
      transformResponse:
        transformHttpResult<AppointmentProtocolDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error ? [{ type: rtkTagTypes.appointmentProtocol, id }] : [],
    }),
  }),
});

export const {
  useGetAppointmentProtocolQuery,
  useUpdateAppointmentProtocolMutation,
  useStartAppointmentProtocolMutation,
  useCompleteAppointmentProtocolMutation,
} = appointmentProtocolApi;
