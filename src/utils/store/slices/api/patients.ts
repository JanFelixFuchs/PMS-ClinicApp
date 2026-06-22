import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreatePatientInputModel,
  UpdatePatientInputModel,
} from '../../../types/inputModels/PatientInputModels';
import type {
  PatientDetailedOutputModel,
  PatientOverviewOutputModel,
} from '../../../types/outputModels/PatientOutputModels';
import { api } from '../api';

export const patientApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createPatient: builder.mutation<
      PatientDetailedOutputModel,
      CreatePatientInputModel
    >({
      query: (createPatientInputModel) => ({
        url: apiRoutes.createPatient(),
        method: HttpMethod.POST,
        body: createPatientInputModel,
      }),
      transformResponse: transformHttpResult<PatientDetailedOutputModel>,
      invalidatesTags: (_result, error) =>
        !error ? [{ type: rtkTagTypes.patient, id: rtkIdTypes.list }] : [],
    }),

    getPatients: builder.query<PatientOverviewOutputModel[], boolean>({
      query: (archived) => ({
        url: apiRoutes.getPatients(archived),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<PatientOverviewOutputModel[]>,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: rtkTagTypes.patient,
                id,
              })),
              { type: rtkTagTypes.patient, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getPatient: builder.query<PatientDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.getPatient(id),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<PatientDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.patient, id }] : [],
    }),

    updatePatient: builder.mutation<
      PatientDetailedOutputModel,
      { id: string; updatePatientInputModel: UpdatePatientInputModel }
    >({
      query: ({ id, updatePatientInputModel }) => ({
        url: apiRoutes.updatePatient(id),
        method: HttpMethod.PUT,
        body: updatePatientInputModel,
      }),
      transformResponse: transformHttpResult<PatientDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.patient, id },
              { type: rtkTagTypes.patient, id: rtkIdTypes.list },
            ]
          : [],
    }),

    archivePatient: builder.mutation<PatientDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.archivePatient(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<PatientDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.patient, id },
              { type: rtkTagTypes.patient, id: rtkIdTypes.list },
            ]
          : [],
    }),

    unarchivePatient: builder.mutation<PatientDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.unarchivePatient(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<PatientDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.patient, id },
              { type: rtkTagTypes.patient, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deletePatient: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deletePatient(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.patient, id },
              { type: rtkTagTypes.patient, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreatePatientMutation,
  useGetPatientsQuery,
  useGetPatientQuery,
  useUpdatePatientMutation,
  useArchivePatientMutation,
  useUnarchivePatientMutation,
  useDeletePatientMutation,
} = patientApi;
