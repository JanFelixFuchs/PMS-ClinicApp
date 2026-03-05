import type React from 'react';
import type { Page } from '../types/pages/Page';
import AppointmentCategoriesPage from '../../pages/appointments/AppointmentCategoriesPage';
import AppointmentCategoryPage from '../../pages/appointments/AppointmentCategoryPage';
import ClinicianCategoryPage from '../../pages/clinicians/ClinicianCategoryPage';
import RegistrationPage from '../../pages/registration/RegistrationPage';
import RoomCategoryPage from '../../pages/rooms/RoomCategoryPage';
import AppointmentPage from '../../pages/appointments/AppointmentPage';
import AppointmentsPage from '../../pages/appointments/AppointmentsPage';
import ClinicianCategoriesPage from '../../pages/clinicians/ClinicianCategoriesPage';
import ClinicianPage from '../../pages/clinicians/ClinicianPage';
import CliniciansPage from '../../pages/clinicians/CliniciansPage';
import DeviceCategoriesPage from '../../pages/devices/DeviceCategoriesPage';
import DeviceCategoryPage from '../../pages/devices/DeviceCategoryPage';
import DevicePage from '../../pages/devices/DevicePage';
import DevicesPage from '../../pages/devices/DevicesPage';
import HomePage from '../../pages/home/HomePage';
import LoginPage from '../../pages/login/LoginPage';
import PatientPage from '../../pages/patients/PatientPage';
import PatientsPage from '../../pages/patients/PatientsPage';
import RoomCategoriesPage from '../../pages/rooms/RoomCategoriesPage';
import RoomPage from '../../pages/rooms/RoomPage';
import RoomsPage from '../../pages/rooms/RoomsPage';
import UserPage from '../../pages/identity/UserPage';
import UsersPage from '../../pages/identity/UsersPage';
import RolePage from '../../pages/identity/RolePage';
import RolesPage from '../../pages/identity/RolesPage';
import type { App } from '../types/apps/Apps';

type PageConfig = {
  app: App | null;
  element: React.ReactNode;
  isProtected: boolean;
  name: Page;
};

export const pages: Record<Page, PageConfig> = {
  // appointments app
  appointmentCategories: {
    app: 'appointments',
    element: <AppointmentCategoriesPage />,
    isProtected: true,
    name: 'appointmentCategories',
  },
  appointmentCategory: {
    app: 'appointments',
    element: <AppointmentCategoryPage />,
    isProtected: true,
    name: 'appointmentCategory',
  },
  appointments: {
    app: 'appointments',
    element: <AppointmentsPage />,
    isProtected: true,
    name: 'appointments',
  },
  appointment: {
    app: 'appointments',
    element: <AppointmentPage />,
    isProtected: true,
    name: 'appointment',
  },

  // clinicians app
  clinicianCategories: {
    app: 'clinicians',
    element: <ClinicianCategoriesPage />,
    isProtected: true,
    name: 'clinicianCategories',
  },
  clinicianCategory: {
    app: 'clinicians',
    element: <ClinicianCategoryPage />,
    isProtected: true,
    name: 'clinicianCategory',
  },
  clinicians: {
    app: 'clinicians',
    element: <CliniciansPage />,
    isProtected: true,
    name: 'clinicians',
  },
  clinician: {
    app: 'clinicians',
    element: <ClinicianPage />,
    isProtected: true,
    name: 'clinician',
  },

  // devices app
  deviceCategories: {
    app: 'devices',
    element: <DeviceCategoriesPage />,
    isProtected: true,
    name: 'deviceCategories',
  },
  deviceCategory: {
    app: 'devices',
    element: <DeviceCategoryPage />,
    isProtected: true,
    name: 'deviceCategory',
  },
  devices: {
    app: 'devices',
    element: <DevicesPage />,
    isProtected: true,
    name: 'devices',
  },
  device: {
    app: 'devices',
    element: <DevicePage />,
    isProtected: true,
    name: 'device',
  },

  // home page
  home: {
    app: null,
    element: <HomePage />,
    isProtected: true,
    name: 'home',
  },

  // identity app
  roles: {
    app: 'identity',
    element: <RolesPage />,
    isProtected: true,
    name: 'roles',
  },
  role: {
    app: 'identity',
    element: <RolePage />,
    isProtected: true,
    name: 'role',
  },
  users: {
    app: 'identity',
    element: <UsersPage />,
    isProtected: true,
    name: 'users',
  },
  user: {
    app: 'identity',
    element: <UserPage />,
    isProtected: true,
    name: 'user',
  },

  // login page
  login: {
    app: null,
    element: <LoginPage />,
    isProtected: false,
    name: 'login',
  },

  // patients app
  patients: {
    app: 'patients',
    element: <PatientsPage />,
    isProtected: true,
    name: 'patients',
  },
  patient: {
    app: 'patients',
    element: <PatientPage />,
    isProtected: true,
    name: 'patient',
  },

  // registration page
  registration: {
    app: null,
    element: <RegistrationPage />,
    isProtected: false,
    name: 'registration',
  },

  // rooms app
  roomCategories: {
    app: 'rooms',
    element: <RoomCategoriesPage />,
    isProtected: true,
    name: 'roomCategories',
  },
  roomCategory: {
    app: 'rooms',
    element: <RoomCategoryPage />,
    isProtected: true,
    name: 'roomCategory',
  },
  rooms: {
    app: 'rooms',
    element: <RoomsPage />,
    isProtected: true,
    name: 'rooms',
  },
  room: {
    app: 'rooms',
    element: <RoomPage />,
    isProtected: true,
    name: 'room',
  },
};

export default pages;
