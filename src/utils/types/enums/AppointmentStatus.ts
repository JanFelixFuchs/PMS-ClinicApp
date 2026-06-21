export const AppointmentStatus = {
  Planned: 'Planned',
  Attended: 'Attended',
};

export type AppointmentStatus =
  (typeof AppointmentStatus)[keyof typeof AppointmentStatus];
