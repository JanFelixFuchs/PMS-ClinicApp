import type { AppointmentStatus } from '../enums/AppointmentStatus';
import type { AppointmentCategoryOverviewOutputModel } from './AppointmentCategoryOutputModels';
import type { AppointmentProtocolOverviewOutputModel } from './AppointmentProtocolOutputModels';
import type { ClinicianOverviewOutputModel } from './ClinicianOutputModels';
import type { DeviceOverviewOutputModel } from './DeviceOutputModels';
import type { PatientOverviewOutputModel } from './PatientOutputModels';
import type { RoomOverviewOutputModel } from './RoomOutputModels';

export type AppointmentOverviewOutputModel = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  status: AppointmentStatus;
};

export type AppointmentDetailedOutputModel = AppointmentOverviewOutputModel & {
  appointmentCategories: AppointmentCategoryOverviewOutputModel[];
  patient: PatientOverviewOutputModel;
  room: RoomOverviewOutputModel;
  devices: DeviceOverviewOutputModel[];
  clinicians: ClinicianOverviewOutputModel[];
  appointmentProtocol: AppointmentProtocolOverviewOutputModel | null;
};
