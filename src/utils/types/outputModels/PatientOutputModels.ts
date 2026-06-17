import type { Gender } from '../enums/Gender';
import type { InsuranceStatus } from '../enums/InsuranceStatus';
import type { AppointmentOverviewOutputModel } from './AppointmentOutputModels';
import type { AppointmentProtocolOverviewOutputModel } from './AppointmentProtocolOutputModels';
import type { ResultOverviewOutputModel } from './ResultOutputModels';
import type {
  AddressOutputModel,
  ContactInformationOutputModel,
} from './SharedOutputModels';

export type PatientOverviewOutputModel = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: Gender;
  insuranceStatus: InsuranceStatus;
  isArchived: boolean;
};

export type PatientDetailedOutputModel = PatientOverviewOutputModel & {
  dateOfCreation: string;
  address: AddressOutputModel;
  contactInformation: ContactInformationOutputModel;
  allergies: string | null;
  remarks: string | null;
  appointments: AppointmentOverviewOutputModel[];
  appointmentProtocols: AppointmentProtocolOverviewOutputModel[];
  results: ResultOverviewOutputModel[];
};
