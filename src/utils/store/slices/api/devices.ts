import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateDeviceInputModel,
  UpdateDeviceInputModel,
} from '../../../types/inputModels/DeviceInputModels';
import type {
  DeviceDetailedOutputModel,
  DeviceOverviewOutputModel,
} from '../../../types/outputModels/DeviceOutputModels';
import { api } from '../api';

export const deviceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createDevice: builder.mutation<
      DeviceDetailedOutputModel,
      CreateDeviceInputModel
    >({
      query: (createDeviceInputModel) => ({
        url: apiRoutes.createDevice(),
        method: HttpMethod.POST,
        body: createDeviceInputModel,
      }),
      transformResponse: transformHttpResult<DeviceDetailedOutputModel>,
      invalidatesTags: (_result, error) =>
        !error ? [{ type: rtkTagTypes.device, id: rtkIdTypes.list }] : [],
    }),

    getDevices: builder.query<DeviceOverviewOutputModel[], boolean>({
      query: (archived) => ({
        url: apiRoutes.getDevices(archived),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<DeviceOverviewOutputModel[]>,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: rtkTagTypes.device,
                id,
              })),
              { type: rtkTagTypes.device, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getDevice: builder.query<DeviceDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.getDevice(id),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<DeviceDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.device, id }] : [],
    }),

    updateDevice: builder.mutation<
      DeviceDetailedOutputModel,
      { id: string; updateDeviceInputModel: UpdateDeviceInputModel }
    >({
      query: ({ id, updateDeviceInputModel }) => ({
        url: apiRoutes.updateDevice(id),
        method: HttpMethod.PUT,
        body: updateDeviceInputModel,
      }),
      transformResponse: transformHttpResult<DeviceDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.device, id },
              { type: rtkTagTypes.device, id: rtkIdTypes.list },
            ]
          : [],
    }),

    archiveDevice: builder.mutation<DeviceDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.archiveDevice(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<DeviceDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.device, id },
              { type: rtkTagTypes.device, id: rtkIdTypes.list },
            ]
          : [],
    }),

    unarchiveDevice: builder.mutation<DeviceDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.unarchiveDevice(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<DeviceDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.device, id },
              { type: rtkTagTypes.device, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteDevice: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteDevice(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.device, id },
              { type: rtkTagTypes.device, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateDeviceMutation,
  useGetDevicesQuery,
  useGetDeviceQuery,
  useUpdateDeviceMutation,
  useArchiveDeviceMutation,
  useUnarchiveDeviceMutation,
  useDeleteDeviceMutation,
} = deviceApi;
