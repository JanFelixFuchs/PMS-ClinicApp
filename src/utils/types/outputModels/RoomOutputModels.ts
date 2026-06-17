import type { AppointmentOverviewOutputModel } from './AppointmentOutputModels';
import type { AppointmentProtocolOverviewOutputModel } from './AppointmentProtocolOutputModels';
import type { RoomCategoryOverviewOutputModel } from './RoomCategoryOutputModels';

export type RoomOverviewOutputModel = {
  id: string;
  name: string;
  abbreviation: string;
  isArchived: boolean;
  roomNumber: string | null;
  floor: string | null;
  building: string | null;
};

export type RoomDetailedOutputModel = RoomOverviewOutputModel & {
  roomCategories: RoomCategoryOverviewOutputModel[];
  appointments: AppointmentOverviewOutputModel[];
  appointmentProtocols: AppointmentProtocolOverviewOutputModel[];
};
