import type { ClaimOutputModel } from './SharedOutputModels';
import type { UserOverviewOutputModel } from './UserOutputModels';

export type RoleOverviewOutputModel = {
  id: string;
  name: string;
  isSystemRole: boolean;
};

export type RoleDetailedOutputModel = RoleOverviewOutputModel & {
  users: UserOverviewOutputModel[];
  claims: ClaimOutputModel[];
};
