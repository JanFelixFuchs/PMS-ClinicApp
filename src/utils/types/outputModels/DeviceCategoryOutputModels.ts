import type { DeviceOverviewOutputModel } from './DeviceOutputModels';

export type DeviceCategoryOverviewOutputModel = {
  id: string;
  name: string;
  abbreviation: string;
  color: string;
};

export type DeviceCategoryDetailedOutputModel =
  DeviceCategoryOverviewOutputModel & {
    devices: DeviceOverviewOutputModel[];
  };
