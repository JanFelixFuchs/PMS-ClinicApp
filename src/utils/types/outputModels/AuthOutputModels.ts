import type { ClinicOutputModel } from './ClinicOutputModels';
import type { CurrentUserOutputModel } from './SharedOutputModels';

export type RegisterClinicOutputModel = {
  clinic: ClinicOutputModel;
  user: CurrentUserOutputModel;
  accessToken: string;
};

export type LoginUserOutputModel = {
  clinic: ClinicOutputModel;
  user: CurrentUserOutputModel;
  accessToken: string;
};

export type RefreshTokensOutputModel = {
  clinic: ClinicOutputModel;
  user: CurrentUserOutputModel;
  accessToken: string;
};

export type UpdatePasswordOutputModel = {
  accessToken: string;
};

export type UpdateUsernameOutputModel = CurrentUserOutputModel;
