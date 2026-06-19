import type { AppointmentOverviewOutputModel } from './AppointmentOutputModels';

export type AppointmentCategoryOverviewOutputModel = {
  id: string;
  name: string;
  abbreviation: string;
  color: string;
};

export type AppointmentCategoryDetailedOutputModel =
  AppointmentCategoryOverviewOutputModel & {
    appointments: AppointmentOverviewOutputModel[];
  };
