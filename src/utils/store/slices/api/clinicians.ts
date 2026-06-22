import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateClinicianInputModel,
  UpdateClinicianInputModel,
} from '../../../types/inputModels/ClinicianInputModels';
import type {
  ClinicianDetailedOutputModel,
  ClinicianOverviewOutputModel,
} from '../../../types/outputModels/ClinicianOutputModels';
import { api } from '../api';

export const clinicianApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createClinician: builder.mutation<
      ClinicianDetailedOutputModel,
      CreateClinicianInputModel
    >({
      query: (createClinicianInputModel) => ({
        url: apiRoutes.createClinician(),
        method: HttpMethod.POST,
        body: createClinicianInputModel,
      }),
      transformResponse: transformHttpResult<ClinicianDetailedOutputModel>,
      invalidatesTags: (_result, error) =>
        !error ? [{ type: rtkTagTypes.clinician, id: rtkIdTypes.list }] : [],
    }),

    getClinicians: builder.query<ClinicianOverviewOutputModel[], boolean>({
      query: (archived) => ({
        url: apiRoutes.getClinicians(archived),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<ClinicianOverviewOutputModel[]>,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: rtkTagTypes.clinician, id })),
              { type: rtkTagTypes.clinician, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getClinician: builder.query<ClinicianDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.getClinician(id),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<ClinicianDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.clinician, id }] : [],
    }),

    updateClinician: builder.mutation<
      ClinicianDetailedOutputModel,
      { id: string; updateClinicianInputModel: UpdateClinicianInputModel }
    >({
      query: ({ id, updateClinicianInputModel }) => ({
        url: apiRoutes.updateClinician(id),
        method: HttpMethod.PUT,
        body: updateClinicianInputModel,
      }),
      transformResponse: transformHttpResult<ClinicianDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.clinician, id },
              { type: rtkTagTypes.clinician, id: rtkIdTypes.list },
            ]
          : [],
    }),

    archiveClinician: builder.mutation<ClinicianDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.archiveClinician(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<ClinicianDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.clinician, id },
              { type: rtkTagTypes.clinician, id: rtkIdTypes.list },
            ]
          : [],
    }),

    unarchiveClinician: builder.mutation<ClinicianDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.unarchiveClinician(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<ClinicianDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.clinician, id },
              { type: rtkTagTypes.clinician, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteClinician: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteClinician(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.clinician, id },
              { type: rtkTagTypes.clinician, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateClinicianMutation,
  useGetCliniciansQuery,
  useGetClinicianQuery,
  useUpdateClinicianMutation,
  useArchiveClinicianMutation,
  useUnarchiveClinicianMutation,
  useDeleteClinicianMutation,
} = clinicianApi;
