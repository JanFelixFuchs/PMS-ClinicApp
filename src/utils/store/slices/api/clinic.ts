import { apiRoutes } from '../../../api/apiRoutes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type { UpdateClinicInputModel } from '../../../types/inputModels/ClinicInputModels';
import type { ClinicOutputModel } from '../../../types/outputModels/ClinicOutputModels';
import { api } from '../api';

export const clinicApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateClinic: builder.mutation<ClinicOutputModel, UpdateClinicInputModel>({
      query: (updateClinicInputModel) => ({
        url: apiRoutes.updateClinic(),
        method: HttpMethod.PUT,
        body: updateClinicInputModel,
      }),
      transformResponse: transformHttpResult<ClinicOutputModel>,
    }),
  }),
});

export const { useUpdateClinicMutation } = clinicApi;
