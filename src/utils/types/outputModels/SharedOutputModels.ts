import type { ClaimType } from '../enums/ClaimType';
import type { ClaimValue } from '../enums/ClaimValue';
import type { Country } from '../enums/Country';

export type AddressOutputModel = {
  street: string;
  houseNumber: string;
  city: string;
  zipCode: string;
  country: Country;
};

export type ClaimOutputModel = {
  id: string;
  type: ClaimType;
  value: ClaimValue;
};

export type ContactInformationOutputModel = {
  email: string;
  phoneNumber: string;
};

export type CurrentUserOutputModel = {
  username: string;
  isAdmin: boolean;
  roleName: string;
  firstName: string | null;
  lastname: string | null;
};
