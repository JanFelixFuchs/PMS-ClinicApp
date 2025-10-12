import { Link } from 'react-router-dom';
import routes from './routes';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { type TFunction } from 'i18next';

type BreadcrumbItemData = {
  pageName: keyof typeof routes;
  hasRoute: boolean;
};

const createBreadcrumbItems = (
  t: TFunction,
  breadcrumbItemsData: BreadcrumbItemData[]
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

const breadcrumbItemConfigs = {
  // appointments
  appointmentCategoriesPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'appointmentCategories', hasRoute: false },
  ],
  appointmentCategoryPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'appointmentCategories', hasRoute: true },
    { pageName: 'appointmentCategory', hasRoute: false },
  ],
  appointmentsPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'appointments', hasRoute: false },
  ],
  appointmentPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'appointments', hasRoute: true },
    { pageName: 'appointment', hasRoute: false },
  ],

  // clinicians app
  clinicianCategoriesPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'clinicianCategories', hasRoute: false },
  ],
  clinicianCategoryPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'clinicianCategories', hasRoute: true },
    { pageName: 'clinicianCategory', hasRoute: false },
  ],
  cliniciansPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'clinicians', hasRoute: false },
  ],
  clinicianPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'clinicians', hasRoute: true },
    { pageName: 'clinician', hasRoute: false },
  ],

  // devices app
  deviceCategoriesPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'deviceCategories', hasRoute: false },
  ],
  deviceCategoryPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'deviceCategories', hasRoute: true },
    { pageName: 'deviceCategory', hasRoute: false },
  ],
  devicesPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'devices', hasRoute: false },
  ],
  devicePage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'devices', hasRoute: true },
    { pageName: 'device', hasRoute: false },
  ],

  // home
  home: [{ pageName: 'home', hasRoute: false }],

  // identity app
  rolesPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'roles', hasRoute: false },
  ],
  rolePage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'roles', hasRoute: true },
    { pageName: 'role', hasRoute: false },
  ],
  usersPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'users', hasRoute: false },
  ],
  userPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'users', hasRoute: true },
    { pageName: 'user', hasRoute: false },
  ],

  // patients app
  patientsPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'patients', hasRoute: false },
  ],
  patientPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'patients', hasRoute: true },
    { pageName: 'patient', hasRoute: false },
  ],

  // rooms app
  roomCategoriesPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'roomCategories', hasRoute: false },
  ],
  roomCategoryPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'roomCategories', hasRoute: true },
    { pageName: 'roomCategory', hasRoute: false },
  ],
  roomsPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'rooms', hasRoute: false },
  ],
  roomPage: [
    { pageName: 'home', hasRoute: true },
    { pageName: 'rooms', hasRoute: true },
    { pageName: 'room', hasRoute: false },
  ],
};

type BreadcrumbItemConfigs = typeof breadcrumbItemConfigs;
type BreadcrumbPageKey = keyof BreadcrumbItemConfigs;

export const getBreadcrumbItems = (
  pageName: BreadcrumbPageKey,
  t: TFunction
): ItemType[] => {
  return createBreadcrumbItems(
    t,
    breadcrumbItemConfigs[pageName] as BreadcrumbItemData[]
  );
};
