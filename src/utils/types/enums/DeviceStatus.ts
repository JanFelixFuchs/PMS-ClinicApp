export const DeviceStatus = {
  Operational: 'Operational',
  InMaintenance: 'InMaintenance',
  OutOfOrder: 'OutOfOrder',
};

export type DeviceStatus = (typeof DeviceStatus)[keyof typeof DeviceStatus];
