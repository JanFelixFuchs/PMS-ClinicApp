const appRoutePrefixes = {
  appointments: 'appointments',
  clinicians: 'clinicians',
  devices: 'devices',
  identity: 'identity',
  patients: 'patients',
  rooms: 'rooms',
};

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

const routes = {
  // appointments app
  appointmentCategories: `/${appRoutePrefixes.appointments}/${pageRoutePrefixes.appointmentCategories}`,
  appointmentCategory: `/${appRoutePrefixes.appointments}/${pageRoutePrefixes.appointmentCategories}/:id`,
  appointments: `/${appRoutePrefixes.appointments}/${pageRoutePrefixes.appointments}`,
  appointment: `/${appRoutePrefixes.appointments}/${pageRoutePrefixes.appointments}/:id`,

  // clinicians app
  clinicianCategories: `/${appRoutePrefixes.clinicians}/${pageRoutePrefixes.clinicianCategories}`,
  clinicianCategory: `/${appRoutePrefixes.clinicians}/${pageRoutePrefixes.clinicianCategories}/:id`,
  clinicians: `/${appRoutePrefixes.clinicians}/${pageRoutePrefixes.clinicians}`,
  clinician: `/${appRoutePrefixes.clinicians}/${pageRoutePrefixes.clinicians}/:id`,

  // devices app
  deviceCategories: `/${appRoutePrefixes.devices}/${pageRoutePrefixes.deviceCategories}`,
  deviceCategory: `/${appRoutePrefixes.devices}/${pageRoutePrefixes.deviceCategories}/:id`,
  devices: `/${appRoutePrefixes.devices}/${pageRoutePrefixes.devices}`,
  device: `/${appRoutePrefixes.devices}/${pageRoutePrefixes.devices}/:id`,

  // home app
  home: '/home',

  // identity app
  roles: `/${appRoutePrefixes.identity}/${pageRoutePrefixes.roles}`,
  role: `/${appRoutePrefixes.identity}/${pageRoutePrefixes.roles}/:id`,
  users: `/${appRoutePrefixes.identity}/${pageRoutePrefixes.users}`,
  user: `/${appRoutePrefixes.identity}/${pageRoutePrefixes.users}/:id`,

  // login page
  login: '/login',

  // patients app
  patients: `/${appRoutePrefixes.patients}/${pageRoutePrefixes.patients}`,
  patient: `/${appRoutePrefixes.patients}/${pageRoutePrefixes.patients}/:id`,

  // registration page
  registration: '/registration',

  // rooms app
  roomCategories: `/${appRoutePrefixes.rooms}/${pageRoutePrefixes.roomCategories}`,
  roomCategory: `/${appRoutePrefixes.rooms}/${pageRoutePrefixes.roomCategories}/:id`,
  rooms: `/${appRoutePrefixes.rooms}/${pageRoutePrefixes.rooms}`,
  room: `/${appRoutePrefixes.rooms}/${pageRoutePrefixes.rooms}/:id`,
};

export default routes;
