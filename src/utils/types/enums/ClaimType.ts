export const ClaimType = {
  Appointment: 'Appointment',
  AppointmentCategory: 'AppointmentCategory',
  AppointmentProtocol: 'AppointmentProtocol',
  Result: 'Result',
  Clinician: 'Clinician',
  ClinicianCategory: 'ClinicianCategory',
  Device: 'Device',
  DeviceCategory: 'DeviceCategory',
  Clinic: 'Clinic',
  Role: 'Role',
  User: 'User',
  Patient: 'Patient',
  Room: 'Room',
  RoomCategory: 'RoomCategory',
};

export type ClaimType = (typeof ClaimType)[keyof typeof ClaimType];
