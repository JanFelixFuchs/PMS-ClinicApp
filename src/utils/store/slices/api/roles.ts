import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateRoleInputModel,
  UpdateRoleInputModel,
} from '../../../types/inputModels/RoleInputModels';
import type {
  RoleDetailedOutputModel,
  RoleOverviewOutputModel,
} from '../../../types/outputModels/RoleOutputModels';
import { api } from '../api';

export const roleApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRole: builder.mutation<RoleDetailedOutputModel, CreateRoleInputModel>(
      {
        query: (createRoleInputModel) => ({
          url: apiRoutes.createRole(),
          method: HttpMethod.POST,
          body: createRoleInputModel,
        }),
        transformResponse: transformHttpResult<RoleDetailedOutputModel>,
        invalidatesTags: (_result, error) =>
          !error ? [{ type: rtkTagTypes.role, id: rtkIdTypes.list }] : [],
      }
    ),

    getRoles: builder.query<RoleOverviewOutputModel[], void>({
      query: () => ({
        url: apiRoutes.getRoles(),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<RoleOverviewOutputModel[]>,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: rtkTagTypes.role, id })),
              { type: rtkTagTypes.role, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getRole: builder.query<RoleDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.getRole(id),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<RoleDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.role, id }] : [],
    }),

    updateRole: builder.mutation<
      RoleDetailedOutputModel,
      { id: string; updateRoleInputModel: UpdateRoleInputModel }
    >({
      query: ({ id, updateRoleInputModel }) => ({
        url: apiRoutes.updateRole(id),
        method: HttpMethod.PUT,
        body: updateRoleInputModel,
      }),
      transformResponse: transformHttpResult<RoleDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.role, id },
              { type: rtkTagTypes.role, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteRole: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteRole(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.role, id },
              { type: rtkTagTypes.role, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateRoleMutation,
  useGetRolesQuery,
  useGetRoleQuery,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
} = roleApi;
