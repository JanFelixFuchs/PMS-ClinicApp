import type { AppointmentOverviewOutputModel } from './AppointmentOutputModels';
import type { AppointmentProtocolOverviewOutputModel } from './AppointmentProtocolOutputModels';
import type { ClinicianCategoryOverviewOutputModel } from './ClinicianCategoryOutputModels';
import type { ResultOverviewOutputModel } from './ResultOutputModels';

export type ClinicianOverviewOutputModel = {
  id: string;
  firstName: string;
  lastName: string;
  isArchived: boolean;
};

export type ClinicianDetailedOutputModel = ClinicianOverviewOutputModel & {
  clinicianCategories: ClinicianCategoryOverviewOutputModel[];
  appointments: AppointmentOverviewOutputModel[];
  appointmentProtocols: AppointmentProtocolOverviewOutputModel[];
  results: ResultOverviewOutputModel[];
};
