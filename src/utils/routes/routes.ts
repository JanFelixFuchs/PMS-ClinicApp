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
  appointmentCategory: `/${appRoutePrefixes.appointments}/${pageRoutePrefixes.appointmentCategories}/:appointmentCategoryId`,
  appointments: `/${appRoutePrefixes.appointments}/${pageRoutePrefixes.appointments}`,
  appointment: `/${appRoutePrefixes.appointments}/${pageRoutePrefixes.appointments}/:appointmentId`,

  // clinicians app
  clinicianCategories: `/${appRoutePrefixes.clinicians}/${pageRoutePrefixes.clinicianCategories}`,
  clinicianCategory: `/${appRoutePrefixes.clinicians}/${pageRoutePrefixes.clinicianCategories}/:clinicianCategoryId`,
  clinicians: `/${appRoutePrefixes.clinicians}/${pageRoutePrefixes.clinicians}`,
  clinician: `/${appRoutePrefixes.clinicians}/${pageRoutePrefixes.clinicians}/:clinicianId`,

  // devices app
  deviceCategories: `/${appRoutePrefixes.devices}/${pageRoutePrefixes.deviceCategories}`,
  deviceCategory: `/${appRoutePrefixes.devices}/${pageRoutePrefixes.deviceCategories}/:deviceCategoryId`,
  devices: `/${appRoutePrefixes.devices}/${pageRoutePrefixes.devices}`,
  device: `/${appRoutePrefixes.devices}/${pageRoutePrefixes.devices}/:deviceId`,

  // home app
  home: '/home',

  // identity app
  roles: `/${appRoutePrefixes.identity}/${pageRoutePrefixes.roles}`,
  role: `/${appRoutePrefixes.identity}/${pageRoutePrefixes.roles}/:roleId`,
  users: `/${appRoutePrefixes.identity}/${pageRoutePrefixes.users}`,
  user: `/${appRoutePrefixes.identity}/${pageRoutePrefixes.users}/:userId`,

  // login page
  login: '/login',

  // patients app
  patients: `/${appRoutePrefixes.patients}/${pageRoutePrefixes.patients}`,
  patient: `/${appRoutePrefixes.patients}/${pageRoutePrefixes.patients}/:patientId`,

  // registration page
  registration: '/registration',

  // rooms app
  roomCategories: `/${appRoutePrefixes.rooms}/${pageRoutePrefixes.roomCategories}`,
  roomCategory: `/${appRoutePrefixes.rooms}/${pageRoutePrefixes.roomCategories}/:roomCategoryId`,
  rooms: `/${appRoutePrefixes.rooms}/${pageRoutePrefixes.rooms}`,
  room: `/${appRoutePrefixes.rooms}/${pageRoutePrefixes.rooms}/:roomId`,
};

export default routes;
