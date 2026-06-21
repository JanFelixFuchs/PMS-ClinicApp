export type CreateAppointmentInputModel = {
  title: string;
  startTime: string;
  endTime: string;
  appointmentCategoryIds: string[];
  patientId: string;
  roomId: string;
  deviceIds: string[];
  clinicianIds: string[];
};

export type UpdateAppointmentInputModel = {
  title: string;
  startTime: string;
  endTime: string;
  appointmentCategoryIds: string[];
  patientId: string;
  roomId: string;
  deviceIds: string[];
  clinicianIds: string[];
};
