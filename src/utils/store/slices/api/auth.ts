import { apiRoutes } from '../../../api/apiRoutes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  LoginUserInputModel,
  RegisterClinicInputModel,
  UpdateClinicCodeInputModel,
  UpdatePasswordInputModel,
  UpdateUsernameInputModel,
} from '../../../types/inputModels/AuthInputModels';
import type {
  RefreshTokensOutputModel,
  LoginUserOutputModel,
  RegisterClinicOutputModel,
  UpdatePasswordOutputModel,
  UpdateUsernameOutputModel,
} from '../../../types/outputModels/AuthOutputModels';
import { api } from '../api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerClinic: builder.mutation<
      RegisterClinicOutputModel,
      RegisterClinicInputModel
    >({
      query: (registerClinicInputModel) => ({
        url: apiRoutes.registerClinic(),
        method: HttpMethod.POST,
        body: registerClinicInputModel,
      }),
      extraOptions: { public: true },
      transformResponse: transformHttpResult<RegisterClinicOutputModel>,
    }),

    loginUser: builder.mutation<LoginUserOutputModel, LoginUserInputModel>({
      query: (loginUserInputModel) => ({
        url: apiRoutes.loginUser(),
        method: HttpMethod.POST,
        body: loginUserInputModel,
      }),
      extraOptions: { public: true },
      transformResponse: transformHttpResult<LoginUserOutputModel>,
    }),

    refreshTokens: builder.mutation<RefreshTokensOutputModel, void>({
      query: () => ({
        url: apiRoutes.refreshTokens(),
        method: HttpMethod.POST,
      }),
      extraOptions: { public: true },
      transformResponse: transformHttpResult<RefreshTokensOutputModel>,
    }),

    updateClinicCode: builder.mutation<void, UpdateClinicCodeInputModel>({
      query: (updateClinicCodeInputModel) => ({
        url: apiRoutes.updateClinicCode(),
        method: HttpMethod.PUT,
        body: updateClinicCodeInputModel,
      }),
      transformResponse: () => undefined,
    }),

    updateUsername: builder.mutation<
      UpdateUsernameOutputModel,
      UpdateUsernameInputModel
    >({
      query: (updateUsernameInputModel) => ({
        url: apiRoutes.updateUsername(),
        method: HttpMethod.PUT,
        body: updateUsernameInputModel,
      }),
      transformResponse: transformHttpResult<UpdateUsernameOutputModel>,
    }),

    updatePassword: builder.mutation<
      UpdatePasswordOutputModel,
      UpdatePasswordInputModel
    >({
      query: (updatePasswordInputModel) => ({
        url: apiRoutes.updatePassword(),
        method: HttpMethod.PUT,
        body: updatePasswordInputModel,
      }),
      transformResponse: transformHttpResult<UpdatePasswordOutputModel>,
    }),

    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: apiRoutes.logoutUser(),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
    }),
  }),
});

export const {
  useRegisterClinicMutation,
  useLoginUserMutation,
  useRefreshTokensMutation,
  useUpdateClinicCodeMutation,
  useUpdateUsernameMutation,
  useUpdatePasswordMutation,
  useLogoutUserMutation,
} = authApi;
