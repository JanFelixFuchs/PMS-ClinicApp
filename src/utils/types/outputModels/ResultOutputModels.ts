import type { AppendixContentType } from '../enums/AppendixContentType';
import type { ClinicianOverviewOutputModel } from './ClinicianOutputModels';
import type { DeviceOverviewOutputModel } from './DeviceOutputModels';
import type { PatientOverviewOutputModel } from './PatientOutputModels';

export type ResultOverviewOutputModel = {
  id: string;
  title: string;
  dateOfCreation: string;
};

export type ResultDetailedOutputModel = ResultOverviewOutputModel & {
  appendixContentType: AppendixContentType;
  appendix: string;
  remarks: string | null;
  patient: PatientOverviewOutputModel;
  clinician: ClinicianOverviewOutputModel;
  device: DeviceOverviewOutputModel;
};
