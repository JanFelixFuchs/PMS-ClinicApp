import type { RoomOverviewOutputModel } from './RoomOutputModels';

export type RoomCategoryOverviewOutputModel = {
  id: string;
  name: string;
  abbreviation: string;
  color: string;
};

export type RoomCategoryDetailedOutputModel =
  RoomCategoryOverviewOutputModel & {
    rooms: RoomOverviewOutputModel[];
  };
