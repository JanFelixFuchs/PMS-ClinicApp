export const pages = {
  appointmentCategories: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  appointmentCategory: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  appointments: {
    isOverviewPage: true,
    isUsingTemplate: false,
  },
  appointment: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  clinicianCategories: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  clinicianCategory: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  clinicians: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  clinician: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  deviceCategories: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  deviceCategory: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  devices: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  device: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  home: {
    isOverviewPage: false,
    isUsingTemplate: false,
  },
  roles: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  role: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  users: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  user: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  login: {
    isOverviewPage: false,
    isUsingTemplate: false,
  },
  patients: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  patient: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  registration: {
    isOverviewPage: false,
    isUsingTemplate: false,
  },
  roomCategories: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  roomCategory: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
  rooms: {
    isOverviewPage: true,
    isUsingTemplate: true,
  },
  room: {
    isOverviewPage: false,
    isUsingTemplate: true,
  },
} as const;

type FilterPages<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never;
}[keyof T];

export type Page = keyof typeof pages;

export type ProtectedPage = Exclude<Page, 'login' | 'registration'>;

export type OverviewPageUsingTemplate = FilterPages<
  typeof pages,
  { isOverviewPage: true; isUsingTemplate: true }
>;
export type DetailsPageUsingTemplate = FilterPages<
  typeof pages,
  { isOverviewPage: false; isUsingTemplate: true }
>;
