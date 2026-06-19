import type { MedicalField } from '../enums/MedicalField';
import type {
  AddressOutputModel,
  ContactInformationOutputModel,
} from './SharedOutputModels';

export type ClinicOutputModel = {
  name: string;
  abbreviation: string;
  owner: string;
  medicalField: MedicalField;
  address: AddressOutputModel;
  contactInformation: ContactInformationOutputModel;
};
