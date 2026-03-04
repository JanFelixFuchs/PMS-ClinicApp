import { pages } from '../pages/pages';
import type { Page } from '../types/pages/Page';

const pageRoutePrefixes = {
  appointmentCategories: 'appointmentCategories',
  appointments: 'appointments',

  clinicianCategories: 'clinicianCategories',
  clinicians: 'clinicians',

  deviceCategories: 'deviceCategories',
  devices: 'devices',

  users: 'users',
  roles: 'roles',

  patients: 'patients',

  roomCategories: 'roomCategories',
  rooms: 'rooms',
};

const routes: Record<Page, string> = {
  // appointments app
  appointmentCategories: `/${pages.appointmentCategories.app}/${pageRoutePrefixes.appointmentCategories}`,
  appointmentCategory: `/${pages.appointmentCategory.app}/${pageRoutePrefixes.appointmentCategories}/:id`,
  appointments: `/${pages.appointments.app}/${pageRoutePrefixes.appointments}`,
  appointment: `/${pages.appointment.app}/${pageRoutePrefixes.appointments}/:id`,

  // clinicians app
  clinicianCategories: `/${pages.clinicianCategories.app}/${pageRoutePrefixes.clinicianCategories}`,
  clinicianCategory: `/${pages.clinicianCategory.app}/${pageRoutePrefixes.clinicianCategories}/:id`,
  clinicians: `/${pages.clinicians.app}/${pageRoutePrefixes.clinicians}`,
  clinician: `/${pages.clinician.app}/${pageRoutePrefixes.clinicians}/:id`,

  // devices app
  deviceCategories: `/${pages.deviceCategories.app}/${pageRoutePrefixes.deviceCategories}`,
  deviceCategory: `/${pages.deviceCategory.app}/${pageRoutePrefixes.deviceCategories}/:id`,
  devices: `/${pages.devices.app}/${pageRoutePrefixes.devices}`,
  device: `/${pages.device.app}/${pageRoutePrefixes.devices}/:id`,

  // home page
  home: '/home',

  // identity app
  roles: `/${pages.roles.app}/${pageRoutePrefixes.roles}`,
  role: `/${pages.role.app}/${pageRoutePrefixes.roles}/:id`,
  users: `/${pages.users.app}/${pageRoutePrefixes.users}`,
  user: `/${pages.user.app}/${pageRoutePrefixes.users}/:id`,

  // login page
  login: '/login',

  // patients app
  patients: `/${pages.patients.app}/${pageRoutePrefixes.patients}`,
  patient: `/${pages.patient.app}/${pageRoutePrefixes.patients}/:id`,

  // registration page
  registration: '/registration',

  // rooms app
  roomCategories: `/${pages.roomCategories.app}/${pageRoutePrefixes.roomCategories}`,
  roomCategory: `/${pages.roomCategory.app}/${pageRoutePrefixes.roomCategories}/:id`,
  rooms: `/${pages.rooms.app}/${pageRoutePrefixes.rooms}`,
  room: `/${pages.room.app}/${pageRoutePrefixes.rooms}/:id`,
};

export default routes;
