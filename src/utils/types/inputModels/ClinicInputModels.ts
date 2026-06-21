import type { Country } from '../enums/Country';
import type { MedicalField } from '../enums/MedicalField';

export type UpdateClinicInputModel = {
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
};
