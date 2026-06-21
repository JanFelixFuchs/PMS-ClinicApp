import type { DeviceStatus } from '../enums/DeviceStatus';

export type CreateDeviceInputModel = {
  name: string;
  abbreviation: string;
  serialNumber: string;
  status: DeviceStatus;
  producer: string;
  deviceCategoryIds: string[];
  dateOfPurchase: string | null;
  dateOfLastMaintenance: string | null;
};

export type UpdateDeviceInputModel = {
  name: string;
  abbreviation: string;
  deviceCategoryIds: string[];
  dateOfLastMaintenance: string | null;
};
