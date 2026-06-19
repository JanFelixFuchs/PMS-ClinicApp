import type { ClinicianOverviewOutputModel } from './ClinicianOutputModels';
import type { RoleOverviewOutputModel } from './RoleOutputModels';

export type UserOverviewOutputModel = {
  id: string;
  username: string;
  isAdmin: boolean;
  isArchived: boolean;
};

export type UserDetailedOutputModel = UserOverviewOutputModel & {
  role: RoleOverviewOutputModel;
  clinician: ClinicianOverviewOutputModel | null;
};
