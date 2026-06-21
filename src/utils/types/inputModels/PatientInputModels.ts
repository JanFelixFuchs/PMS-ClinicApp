import type { Country } from '../enums/Country';
import type { Gender } from '../enums/Gender';
import type { InsuranceStatus } from '../enums/InsuranceStatus';

export type CreatePatientInputModel = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  street: string;
  houseNumber: string;
  city: string;
  zipCode: string;
  country: Country;
  email: string;
  phoneNumber: string;
  insuranceStatus: InsuranceStatus;
  allergies: string | null;
  remarks: string | null;
};

export type UpdatePatientInputModel = {
  lastName: string;
  street: string;
  houseNumber: string;
  city: string;
  zipCode: string;
  country: Country;
  email: string;
  phoneNumber: string;
  insuranceStatus: InsuranceStatus;
  allergies: string | null;
  remarks: string | null;
};
