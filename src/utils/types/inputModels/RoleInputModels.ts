import type { ClaimType } from '../enums/ClaimType';
import type { ClaimValue } from '../enums/ClaimValue';

export type CreateRoleInputModel = {
  name: string;
  claims: Record<ClaimType, ClaimValue>;
  userIds: string[];
};

export type UpdateRoleInputModel = {
  name: string;
  claims: Record<ClaimType, ClaimValue>;
};
