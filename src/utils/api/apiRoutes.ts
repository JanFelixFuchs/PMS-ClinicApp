import type { DeviceStatus } from '../types/enums/DeviceStatus';

const apiPrefixes = {
  appointmentCategories: '/appointmentCategories',
  appointments: '/appointments',
  appointmentProtocols: '/appointmentProtocols',
  auth: '/auth',
  clinic: '/clinic',
  clinicianCategories: '/clinicianCategories',
  clinicians: '/clinicians',
  deviceCategories: '/deviceCategories',
  devices: '/devices',
  patients: '/patients',
  results: '/results',
  roles: '/roles',
  rooms: '/rooms',
  roomCategories: '/roomCategories',
  users: '/users',
};

export const apiRoutes = {
  // appointment categories
  createAppointmentCategory: () => apiPrefixes.appointmentCategories,
  getAppointmentCategories: () => apiPrefixes.appointmentCategories,
  getAppointmentCategory: (id: string) =>
    `${apiPrefixes.appointmentCategories}/${id}`,
  updateAppointmentCategory: (id: string) =>
    `${apiPrefixes.appointmentCategories}/${id}`,
  deleteAppointmentCategory: (id: string) =>
    `${apiPrefixes.appointmentCategories}/${id}`,

  // appointments
  createAppointment: () => apiPrefixes.appointments,
  getAppointments: (startDate: string, endDate: string) =>
    `${apiPrefixes.appointments}?startDateTime=${encodeURIComponent(startDate)}&endDateTime=${encodeURIComponent(endDate)}`,
  getAppointment: (id: string) => `${apiPrefixes.appointments}/${id}`,
  updateAppointment: (id: string) => `${apiPrefixes.appointments}/${id}`,
  markAppointmentAsAttended: (id: string) =>
    `${apiPrefixes.appointments}/${id}/mark-as-attended`,
  deleteAppointment: (id: string) => `${apiPrefixes.appointments}/${id}`,

  // appointment protocols
  getAppointmentProtocol: (id: string) =>
    `${apiPrefixes.appointmentProtocols}/${id}`,
  updateAppointmentProtocol: (id: string) =>
    `${apiPrefixes.appointmentProtocols}/${id}`,
  startAppointmentProtocol: (id: string) =>
    `${apiPrefixes.appointmentProtocols}/${id}/start`,
  completeAppointmentProtocol: (id: string) =>
    `${apiPrefixes.appointmentProtocols}/${id}/complete`,

  // auth
  registerClinic: () => `${apiPrefixes.auth}/register`,
  loginUser: () => `${apiPrefixes.auth}/login`,
  refreshTokens: () => `${apiPrefixes.auth}/refresh`,
  updateClinicCode: () => `${apiPrefixes.auth}/code`,
  updateUsername: () => `${apiPrefixes.auth}/username`,
  updatePassword: () => `${apiPrefixes.auth}/password`,
  logoutUser: () => `${apiPrefixes.auth}/logout`,

  // clinic
  updateClinic: () => apiPrefixes.clinic,

  // clinician categories
  createClinicianCategory: () => apiPrefixes.clinicianCategories,
  getClinicianCategories: () => apiPrefixes.clinicianCategories,
  getClinicianCategory: (id: string) =>
    `${apiPrefixes.clinicianCategories}/${id}`,
  updateClinicianCategory: (id: string) =>
    `${apiPrefixes.clinicianCategories}/${id}`,
  deleteClinicianCategory: (id: string) =>
    `${apiPrefixes.clinicianCategories}/${id}`,

  // clinicians
  createClinician: () => apiPrefixes.clinicians,
  getClinicians: (archived: boolean) =>
    `${apiPrefixes.clinicians}?archived=${archived}`,
  getClinician: (id: string) => `${apiPrefixes.clinicians}/${id}`,
  updateClinician: (id: string) => `${apiPrefixes.clinicians}/${id}`,
  archiveClinician: (id: string) => `${apiPrefixes.clinicians}/${id}/archive`,
  unarchiveClinician: (id: string) =>
    `${apiPrefixes.clinicians}/${id}/unarchive`,
  deleteClinician: (id: string) => `${apiPrefixes.clinicians}/${id}`,

  // device categories
  createDeviceCategory: () => apiPrefixes.deviceCategories,
  getDeviceCategories: () => apiPrefixes.deviceCategories,
  getDeviceCategory: (id: string) => `${apiPrefixes.deviceCategories}/${id}`,
  updateDeviceCategory: (id: string) => `${apiPrefixes.deviceCategories}/${id}`,
  deleteDeviceCategory: (id: string) => `${apiPrefixes.deviceCategories}/${id}`,

  // devices
  createDevice: () => apiPrefixes.devices,
  getDevices: (archived: boolean) =>
    `${apiPrefixes.devices}?archived=${archived}`,
  getDevice: (id: string) => `${apiPrefixes.devices}/${id}`,
  updateDevice: (id: string) => `${apiPrefixes.devices}/${id}`,
  updateDeviceStatus: (id: string, status: DeviceStatus) =>
    `${apiPrefixes.devices}/${id}/status/${status}`,
  archiveDevice: (id: string) => `${apiPrefixes.devices}/${id}/archive`,
  unarchiveDevice: (id: string) => `${apiPrefixes.devices}/${id}/unarchive`,
  deleteDevice: (id: string) => `${apiPrefixes.devices}/${id}`,

  // patients
  createPatient: () => apiPrefixes.patients,
  getPatients: (archived: boolean) =>
    `${apiPrefixes.patients}?archived=${archived}`,
  getPatient: (id: string) => `${apiPrefixes.patients}/${id}`,
  updatePatient: (id: string) => `${apiPrefixes.patients}/${id}`,
  archivePatient: (id: string) => `${apiPrefixes.appointments}/${id}/archive`,
  unarchivePatient: (id: string) =>
    `${apiPrefixes.appointments}/${id}/unarchive`,
  deletePatient: (id: string) => `${apiPrefixes.patients}/${id}`,

  // results
  createResult: () => apiPrefixes.results,
  getResult: (id: string) => `${apiPrefixes.results}/${id}`,
  deleteResult: (id: string) => `${apiPrefixes.results}/${id}`,

  // roles
  createRole: () => apiPrefixes.roles,
  getRoles: () => apiPrefixes.roles,
  getRole: (id: string) => `${apiPrefixes.roles}/${id}`,
  updateRole: (id: string) => `${apiPrefixes.roles}/${id}`,
  deleteRole: (id: string) => `${apiPrefixes.roles}/${id}`,

  // room
  createRoom: () => apiPrefixes.rooms,
  getRooms: (archived: boolean) => `${apiPrefixes.rooms}?archived=${archived}`,
  getRoom: (id: string) => `${apiPrefixes.rooms}/${id}`,
  updateRoom: (id: string) => `${apiPrefixes.rooms}/${id}`,
  archiveRoom: (id: string) => `${apiPrefixes.rooms}/${id}/archive`,
  unarchiveRoom: (id: string) => `${apiPrefixes.rooms}/${id}/unarchive`,
  deleteRoom: (id: string) => `${apiPrefixes.rooms}/${id}`,

  // room categories
  createRoomCategory: () => apiPrefixes.roomCategories,
  getRoomCategories: () => apiPrefixes.roomCategories,
  getRoomCategory: (id: string) => `${apiPrefixes.roomCategories}/${id}`,
  updateRoomCategory: (id: string) => `${apiPrefixes.roomCategories}/${id}`,
  deleteRoomCategory: (id: string) => `${apiPrefixes.roomCategories}/${id}`,

  // users
  createUser: () => apiPrefixes.users,
  getUsers: (archived: boolean) => `${apiPrefixes.users}?archived=${archived}`,
  getUser: (id: string) => `${apiPrefixes.users}/${id}`,
  updateUser: (id: string) => `${apiPrefixes.users}/${id}`,
  archiveUser: (id: string) => `${apiPrefixes.users}/${id}/archive`,
  unarchiveUser: (id: string) => `${apiPrefixes.users}/${id}/unarchive`,
  deleteUser: (id: string) => `${apiPrefixes.users}/${id}`,
};
