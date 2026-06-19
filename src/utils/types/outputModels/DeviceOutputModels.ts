import type { DeviceStatus } from '../enums/DeviceStatus';
import type { AppointmentOverviewOutputModel } from './AppointmentOutputModels';
import type { AppointmentProtocolOverviewOutputModel } from './AppointmentProtocolOutputModels';
import type { DeviceCategoryOverviewOutputModel } from './DeviceCategoryOutputModels';
import type { ResultOverviewOutputModel } from './ResultOutputModels';

export type DeviceOverviewOutputModel = {
  id: string;
  name: string;
  abbreviation: string;
  serialNumber: string;
  status: DeviceStatus;
  producer: string;
  isArchived: boolean;
};

export type DeviceDetailedOutputModel = DeviceOverviewOutputModel & {
  deviceCategories: DeviceCategoryOverviewOutputModel[];
  dateOfPurchase: string | null;
  dateOfLastMaintenance: string | null;
  appointments: AppointmentOverviewOutputModel[];
  appointmentProtocols: AppointmentProtocolOverviewOutputModel[];
  results: ResultOverviewOutputModel[];
};
