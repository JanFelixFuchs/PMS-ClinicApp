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
  isOverviewPage: boolean;
  isProtected: boolean;
  isUsingTemplate: boolean;
  name: Page;
};

export const pages = {
  // appointments app
  appointmentCategories: {
    app: 'appointments',
    element: <AppointmentCategoriesPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'appointmentCategories',
  },
  appointmentCategory: {
    app: 'appointments',
    element: <AppointmentCategoryPage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'appointmentCategory',
  },
  appointments: {
    app: 'appointments',
    element: <AppointmentsPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: false,
    name: 'appointments',
  },
  appointment: {
    app: 'appointments',
    element: <AppointmentPage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'appointment',
  },

  // clinicians app
  clinicianCategories: {
    app: 'clinicians',
    element: <ClinicianCategoriesPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'clinicianCategories',
  },
  clinicianCategory: {
    app: 'clinicians',
    element: <ClinicianCategoryPage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'clinicianCategory',
  },
  clinicians: {
    app: 'clinicians',
    element: <CliniciansPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'clinicians',
  },
  clinician: {
    app: 'clinicians',
    element: <ClinicianPage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'clinician',
  },

  // devices app
  deviceCategories: {
    app: 'devices',
    element: <DeviceCategoriesPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'deviceCategories',
  },
  deviceCategory: {
    app: 'devices',
    element: <DeviceCategoryPage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'deviceCategory',
  },
  devices: {
    app: 'devices',
    element: <DevicesPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'devices',
  },
  device: {
    app: 'devices',
    element: <DevicePage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'device',
  },

  // home page
  home: {
    app: null,
    element: <HomePage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: false,
    name: 'home',
  },

  // identity app
  roles: {
    app: 'identity',
    element: <RolesPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'roles',
  },
  role: {
    app: 'identity',
    element: <RolePage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'role',
  },
  users: {
    app: 'identity',
    element: <UsersPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'users',
  },
  user: {
    app: 'identity',
    element: <UserPage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'user',
  },

  // login page
  login: {
    app: null,
    element: <LoginPage />,
    isOverviewPage: false,
    isProtected: false,
    isUsingTemplate: false,
    name: 'login',
  },

  // patients app
  patients: {
    app: 'patients',
    element: <PatientsPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'patients',
  },
  patient: {
    app: 'patients',
    element: <PatientPage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'patient',
  },

  // registration page
  registration: {
    app: null,
    element: <RegistrationPage />,
    isOverviewPage: false,
    isProtected: false,
    isUsingTemplate: false,
    name: 'registration',
  },

  // rooms app
  roomCategories: {
    app: 'rooms',
    element: <RoomCategoriesPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'roomCategories',
  },
  roomCategory: {
    app: 'rooms',
    element: <RoomCategoryPage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'roomCategory',
  },
  rooms: {
    app: 'rooms',
    element: <RoomsPage />,
    isOverviewPage: true,
    isProtected: true,
    isUsingTemplate: true,
    name: 'rooms',
  },
  room: {
    app: 'rooms',
    element: <RoomPage />,
    isOverviewPage: false,
    isProtected: true,
    isUsingTemplate: true,
    name: 'room',
  },
} as const satisfies Record<Page, PageConfig>;

export default pages;
