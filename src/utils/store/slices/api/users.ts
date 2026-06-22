import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateUserInputModel,
  UpdateUserInputModel,
} from '../../../types/inputModels/UserInputModels';
import type {
  UserDetailedOutputModel,
  UserOverviewOutputModel,
} from '../../../types/outputModels/UserOutputModels';
import { api } from '../api';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation<UserDetailedOutputModel, CreateUserInputModel>(
      {
        query: (createUserInputModel) => ({
          url: apiRoutes.createUser(),
          method: HttpMethod.POST,
          body: createUserInputModel,
        }),
        transformResponse: transformHttpResult<UserDetailedOutputModel>,
        invalidatesTags: (_result, error) =>
          !error ? [{ type: rtkTagTypes.user, id: rtkIdTypes.list }] : [],
      }
    ),

    getUsers: builder.query<UserOverviewOutputModel[], boolean>({
      query: (archived) => ({
        url: apiRoutes.getUsers(archived),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<UserOverviewOutputModel[]>,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: rtkTagTypes.user, id })),
              { type: rtkTagTypes.user, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getUser: builder.query<UserDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.getUser(id),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<UserDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.user, id }] : [],
    }),

    updateUser: builder.mutation<
      UserDetailedOutputModel,
      { id: string; updateUserInputModel: UpdateUserInputModel }
    >({
      query: ({ id, updateUserInputModel }) => ({
        url: apiRoutes.updateUser(id),
        method: HttpMethod.PUT,
        body: updateUserInputModel,
      }),
      transformResponse: transformHttpResult<UserDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.user, id },
              { type: rtkTagTypes.user, id: rtkIdTypes.list },
            ]
          : [],
    }),

    archiveUser: builder.mutation<UserDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.archiveUser(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<UserDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.user, id },
              { type: rtkTagTypes.user, id: rtkIdTypes.list },
            ]
          : [],
    }),

    unarchiveUser: builder.mutation<UserDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.unarchiveUser(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<UserDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.user, id },
              { type: rtkTagTypes.user, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteUser(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.user, id },
              { type: rtkTagTypes.user, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useArchiveUserMutation,
  useUnarchiveUserMutation,
  useDeleteUserMutation,
} = userApi;
