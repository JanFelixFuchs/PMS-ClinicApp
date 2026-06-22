import { apiRoutes } from '../../../api/apiRoutes';
import { rtkIdTypes, rtkTagTypes } from '../../../api/rtkTagTypes';
import { HttpMethod } from '../../../types/api/HttpMethod';
import { transformHttpResult } from '../../../types/api/HttpResult';
import type {
  CreateRoomInputModel,
  UpdateRoomInputModel,
} from '../../../types/inputModels/RoomInputModels';
import type {
  RoomOverviewOutputModel,
  RoomDetailedOutputModel,
} from '../../../types/outputModels/RoomOutputModels';
import { api } from '../api';

export const roomApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRoom: builder.mutation<RoomDetailedOutputModel, CreateRoomInputModel>(
      {
        query: (createRoomInputModel) => ({
          url: apiRoutes.createRoom(),
          method: HttpMethod.POST,
          body: createRoomInputModel,
        }),
        transformResponse: transformHttpResult<RoomDetailedOutputModel>,
        invalidatesTags: (_result, error) =>
          !error ? [{ type: rtkTagTypes.room, id: rtkIdTypes.list }] : [],
      }
    ),

    getRooms: builder.query<RoomOverviewOutputModel[], boolean>({
      query: (archived) => ({
        url: apiRoutes.getRooms(archived),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<RoomOverviewOutputModel[]>,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: rtkTagTypes.room,
                id,
              })),
              { type: rtkTagTypes.room, id: rtkIdTypes.list },
            ]
          : [],
    }),

    getRoom: builder.query<RoomDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.getRoom(id),
        method: HttpMethod.GET,
      }),
      transformResponse: transformHttpResult<RoomDetailedOutputModel>,
      providesTags: (result, _error, id) =>
        result ? [{ type: rtkTagTypes.room, id }] : [],
    }),

    updateRoom: builder.mutation<
      RoomDetailedOutputModel,
      { id: string; updateRoomInputModel: UpdateRoomInputModel }
    >({
      query: ({ id, updateRoomInputModel }) => ({
        url: apiRoutes.updateRoom(id),
        method: HttpMethod.PUT,
        body: updateRoomInputModel,
      }),
      transformResponse: transformHttpResult<RoomDetailedOutputModel>,
      invalidatesTags: (_result, error, { id }) =>
        !error
          ? [
              { type: rtkTagTypes.room, id },
              { type: rtkTagTypes.room, id: rtkIdTypes.list },
            ]
          : [],
    }),

    archiveRoom: builder.mutation<RoomDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.archiveRoom(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<RoomDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.room, id },
              { type: rtkTagTypes.room, id: rtkIdTypes.list },
            ]
          : [],
    }),

    unarchiveRoom: builder.mutation<RoomDetailedOutputModel, string>({
      query: (id) => ({
        url: apiRoutes.unarchiveRoom(id),
        method: HttpMethod.PUT,
      }),
      transformResponse: transformHttpResult<RoomDetailedOutputModel>,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.room, id },
              { type: rtkTagTypes.room, id: rtkIdTypes.list },
            ]
          : [],
    }),

    deleteRoom: builder.mutation<void, string>({
      query: (id) => ({
        url: apiRoutes.deleteRoom(id),
        method: HttpMethod.DELETE,
      }),
      transformResponse: () => undefined,
      invalidatesTags: (_result, error, id) =>
        !error
          ? [
              { type: rtkTagTypes.room, id },
              { type: rtkTagTypes.room, id: rtkIdTypes.list },
            ]
          : [],
    }),
  }),
});

export const {
  useCreateRoomMutation,
  useGetRoomsQuery,
  useGetRoomQuery,
  useUpdateRoomMutation,
  useArchiveRoomMutation,
  useUnarchiveRoomMutation,
  useDeleteRoomMutation,
} = roomApi;
