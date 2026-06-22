import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateRoomCategoryInputModel,
  UpdateRoomCategoryInputModel,
} from '../../../types/inputModels/RoomCategoryInputModels';
import type {
  RoomCategoryDetailedOutputModel,
  RoomCategoryOverviewOutputModel,
} from '../../../types/outputModels/RoomCategoryOutputModels';
import { api } from '../api';

export const roomCategoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRoomCategory: builder.mutation<
      RoomCategoryDetailedOutputModel,
      CreateRoomCategoryInputModel
    >({
      query: (createRoomCategoryInputModel) => ({
        url: apiRoutes.createRoomCategory(),
        method: HttpMethod.POST,
        body: createRoomCategoryInputModel,
      }),
      transformResponse: transformHttpResult<RoomCategoryDetailedOutputModel>,
      invalidatesTags: (_result, error) =>
        !error ? [{ type: rtkTagTypes.roomCategory, id: rtkIdTypes.list }] : [],
    }),

    getRoomCategories: builder.query<RoomCategoryOverviewOutputModel[], void>({
      query: () => ({
        url: apiRoutes.getRoomCategories(),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<RoomCategoryOverviewOutputModel[]>,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: rtkTagTypes.roomCategory,
                id,
              })),
              { type: rtkTagTypes.roomCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getRoomCategory: builder.query<RoomCategoryDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.getRoomCategory(id),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<RoomCategoryDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.roomCategory, id }] : [],
    }),

    updateRoomCategory: builder.mutation<
      RoomCategoryDetailedOutputModel,
      { id: string; updateRoomCategoryInputModel: UpdateRoomCategoryInputModel }
    >({
      query: ({ id, updateRoomCategoryInputModel }) => ({
        url: apiRoutes.updateRoomCategory(id),
        method: HttpMethod.PUT,
        body: updateRoomCategoryInputModel,
      }),
      transformResponse: transformHttpResult<RoomCategoryDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.roomCategory, id },
              { type: rtkTagTypes.roomCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteRoomCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteRoomCategory(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.roomCategory, id },
              { type: rtkTagTypes.roomCategory, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateRoomCategoryMutation,
  useGetRoomCategoriesQuery,
  useGetRoomCategoryQuery,
  useUpdateRoomCategoryMutation,
  useDeleteRoomCategoryMutation,
} = roomCategoryApi;
