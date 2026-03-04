import { Link } from 'react-router-dom';
import routes from './routes';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { type TFunction } from 'i18next';
import { type Page } from '../types/pages/Page';

type BreadcrumbPage = Exclude<Page, 'login' | 'registration'>;

type BreadcrumbItemData = {
  pageName: BreadcrumbPage;
  hasRoute: boolean;
};

const breadcrumbItemConfigs: Record<BreadcrumbPage, BreadcrumbItemData[]> = {
  // appointments
  appointmentCategories: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'appointmentCategories', hasRoute: false },
  ],
  appointmentCategory: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'appointmentCategories', hasRoute: true },
    { pageName: 'appointmentCategory', hasRoute: false },
  ],
  appointments: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'appointments', hasRoute: false },
  ],
  appointment: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'appointments', hasRoute: true },
    { pageName: 'appointment', hasRoute: false },
  ],

  // clinicians app
  clinicianCategories: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'clinicianCategories', hasRoute: false },
  ],
  clinicianCategory: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'clinicianCategories', hasRoute: true },
    { pageName: 'clinicianCategory', hasRoute: false },
  ],
  clinicians: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'clinicians', hasRoute: false },
  ],
  clinician: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'clinicians', hasRoute: true },
    { pageName: 'clinician', hasRoute: false },
  ],

  // devices app
  deviceCategories: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'deviceCategories', hasRoute: false },
  ],
  deviceCategory: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'deviceCategories', hasRoute: true },
    { pageName: 'deviceCategory', hasRoute: false },
  ],
  devices: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'devices', hasRoute: false },
  ],
  device: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'devices', hasRoute: true },
    { pageName: 'device', hasRoute: false },
  ],

  // home
  home: [{ pageName: 'home', hasRoute: false }],

  // identity app
  roles: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'roles', hasRoute: false },
  ],
  role: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'roles', hasRoute: true },
    { pageName: 'role', hasRoute: false },
  ],
  users: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'users', hasRoute: false },
  ],
  user: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'users', hasRoute: true },
    { pageName: 'user', hasRoute: false },
  ],

  // patients app
  patients: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'patients', hasRoute: false },
  ],
  patient: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'patients', hasRoute: true },
    { pageName: 'patient', hasRoute: false },
  ],

  // rooms app
  roomCategories: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'roomCategories', hasRoute: false },
  ],
  roomCategory: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'roomCategories', hasRoute: true },
    { pageName: 'roomCategory', hasRoute: false },
  ],
  rooms: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'rooms', hasRoute: false },
  ],
  room: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'rooms', hasRoute: true },
    { pageName: 'room', hasRoute: false },
  ],
};

const createBreadcrumbItems = (
  breadcrumbItemsData: BreadcrumbItemData[],
  t: TFunction
): ItemType[] => {
  return [
    ...breadcrumbItemsData.map(({ pageName, hasRoute }) => ({
      key: `breadcrumbItem-${pageName}`,
      title: hasRoute ? (
        <Link to={routes[pageName]}>{t(`page.${pageName}.title`)}</Link>
      ) : (
        t(`page.${pageName}.title`)
      ),
    })),
  ];
};

// type BreadcrumbItemConfigs = typeof breadcrumbItemConfigs;
// type BreadcrumbPageKey = keyof BreadcrumbItemConfigs;

export const getBreadcrumbItems = (
  page: BreadcrumbPage,
  t: TFunction
): ItemType[] => {
  return createBreadcrumbItems(
    breadcrumbItemConfigs[page] as BreadcrumbItemData[],
    t
  );
};
