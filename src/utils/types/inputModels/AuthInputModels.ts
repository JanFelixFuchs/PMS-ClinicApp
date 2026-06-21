import type { Country } from '../enums/Country';
import type { MedicalField } from '../enums/MedicalField';

export type RegisterClinicInputModel = {
  code: string;
  name: string;
  abbreviation: string;
  owner: string;
  medicalField: MedicalField;
  street: string;
  houseNumber: string;
  city: string;
  zipCode: string;
  country: Country;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
  roleNameWithNoRights: string;
  roleNameWithAllRights: string;
};

export type LoginUserInputModel = {
  code: string;
  username: string;
  password: string;
};

export type UpdateClinicCodeInputModel = {
  oldCode: string;
  newCode: string;
};

export type UpdateUsernameInputModel = {
  oldUsername: string;
  newUsername: string;
};

export type UpdatePasswordInputModel = {
  oldPassword: string;
  newPassword: string;
};
