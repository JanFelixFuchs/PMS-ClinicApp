export const AppointmentProtocolStatus = {
  Undealt: 'Undealt',
  Started: 'Started',
  Completed: 'Completed',
};

export type AppointmentProtocolStatus =
  (typeof AppointmentProtocolStatus)[keyof typeof AppointmentProtocolStatus];
