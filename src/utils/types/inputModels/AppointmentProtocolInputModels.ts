export type UpdateAppointmentProtocolInputModel = {
  symptoms: string | null;
  diagnosis: string | null;
  treatmen: string | null;
  remarks: string | null;
  clinicianId: string;
  roomId: string;
  deviceIds: string[];
};
