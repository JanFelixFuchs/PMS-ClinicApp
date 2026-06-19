import type { AppointmentProtocolStatus } from '../enums/AppointmentProtocolStatus';
import type { AppointmentOverviewOutputModel } from './AppointmentOutputModels';
import type { ClinicianOverviewOutputModel } from './ClinicianOutputModels';
import type { DeviceOverviewOutputModel } from './DeviceOutputModels';
import type { PatientOverviewOutputModel } from './PatientOutputModels';
import type { RoomOverviewOutputModel } from './RoomOutputModels';

export type AppointmentProtocolOverviewOutputModel = {
  id: string;
  dateOfAppointment: string;
  status: AppointmentProtocolStatus;
};

export type AppointmentProtocolDetailedOutputModel =
  AppointmentProtocolOverviewOutputModel & {
    dateOfProcessingStart: string | null;
    dateOfProcessingCompletion: string | null;
    symptoms: string | null;
    diagnosis: string | null;
    treatment: string | null;
    remarks: string | null;
    appointment: AppointmentOverviewOutputModel;
    patient: PatientOverviewOutputModel;
    clinician: ClinicianOverviewOutputModel;
    room: RoomOverviewOutputModel;
    devices: DeviceOverviewOutputModel[];
  };
