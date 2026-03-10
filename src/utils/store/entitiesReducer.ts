import { combineReducers } from '@reduxjs/toolkit';
import appointmentsReducer from './slices/entitites/appointments';
import appointmentCategoriesReducer from './slices/entitites/appointmentCategories';
import cliniciansReducer from './slices/entitites/clinicians';
import clinicianCategoriesReducer from './slices/entitites/clinicianCategories';
import deviceCategoriesReducer from './slices/entitites/deviceCategories';
import devicesReducer from './slices/entitites/devices';
import patientsReducer from './slices/entitites/patients';
import rolesReducer from './slices/entitites/roles';
import roomsReducer from './slices/entitites/room';
import roomCategoriesReducer from './slices/entitites/roomCategories';
import usersReducer from './slices/entitites/users';

const entitiesReducer = combineReducers({
  appointments: appointmentsReducer,
  appointmentCategories: appointmentCategoriesReducer,
  clinicians: cliniciansReducer,
  clinicianCategories: clinicianCategoriesReducer,
  devices: devicesReducer,
  deviceCategories: deviceCategoriesReducer,
  patients: patientsReducer,
  roles: rolesReducer,
  rooms: roomsReducer,
  roomCategories: roomCategoriesReducer,
  users: usersReducer,
});

export default entitiesReducer;
