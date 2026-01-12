import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../../pages/home/HomePage';
import AppointmentsPage from '../../../pages/appointments/AppointmentsPage';
import AppointmentCategoriesPage from '../../../pages/appointments/AppointmentCategoriesPage';
import DevicePage from '../../../pages/devices/DevicesPage';
import DeviceCategoriesPage from '../../../pages/devices/DeviceCategoriesPage';
import ClinicianPage from '../../../pages/clinicians/ClinicianPage';
import ClinicianCategoriesPage from '../../../pages/clinicians/ClinicianCategoriesPage';
import AppointmentCategoryPage from '../../../pages/appointments/AppointmentCategoryPage';
import AppointmentPage from '../../../pages/appointments/AppointmentPage';
import ClinicianCategoryPage from '../../../pages/clinicians/ClinicianCategoryPage';
import CliniciansPage from '../../../pages/clinicians/CliniciansPage';
import DeviceCategoryPage from '../../../pages/devices/DeviceCategoryPage';
import DevicesPage from '../../../pages/devices/DevicesPage';
import RolesPage from '../../../pages/identity/RolesPage';
import RolePage from '../../../pages/identity/RolePage';
import UsersPage from '../../../pages/identity/UsersPage';
import UserPage from '../../../pages/identity/UserPage';
import PatientsPage from '../../../pages/patients/PatientsPage';
import PatientPage from '../../../pages/patients/PatientPage';
import RoomCategoriesPage from '../../../pages/rooms/RoomCategoriesPage';
import RoomCategoryPage from '../../../pages/rooms/RoomCategoryPage';
import RoomsPage from '../../../pages/rooms/RoomsPage';
import RoomPage from '../../../pages/rooms/RoomPage';
import routes from '../../../utils/routes/routes';

/* - - - STATIC ELEMENTS - - - */
const pages = [
  // appointments app
  {
    path: routes.appointmentCategories,
    element: <AppointmentCategoriesPage />,
  },
  {
    path: routes.appointmentCategory,
    element: <AppointmentCategoryPage />,
  },
  {
    path: routes.appointments,
    element: <AppointmentsPage />,
  },
  {
    path: routes.appointment,
    element: <AppointmentPage />,
  },

  // clinicians app
  {
    path: routes.clinicianCategories,
    element: <ClinicianCategoriesPage />,
  },
  {
    path: routes.clinicianCategory,
    element: <ClinicianCategoryPage />,
  },
  {
    path: routes.clinicians,
    element: <CliniciansPage />,
  },
  {
    path: routes.clinician,
    element: <ClinicianPage />,
  },

  // devices app
  {
    path: routes.deviceCategories,
    element: <DeviceCategoriesPage />,
  },
  {
    path: routes.deviceCategory,
    element: <DeviceCategoryPage />,
  },
  {
    path: routes.devices,
    element: <DevicesPage />,
  },
  {
    path: routes.device,
    element: <DevicePage />,
  },

  // home app
  {
    path: routes.home,
    element: <HomePage />,
  },

  // identity app
  {
    path: routes.roles,
    element: <RolesPage />,
  },
  {
    path: routes.role,
    element: <RolePage />,
  },
  {
    path: routes.users,
    element: <UsersPage />,
  },
  {
    path: routes.user,
    element: <UserPage />,
  },

  // patients app
  {
    path: routes.patients,
    element: <PatientsPage />,
  },
  {
    path: routes.patient,
    element: <PatientPage />,
  },

  // rooms app
  {
    path: routes.roomCategories,
    element: <RoomCategoriesPage />,
  },
  {
    path: routes.roomCategory,
    element: <RoomCategoryPage />,
  },
  {
    path: routes.rooms,
    element: <RoomsPage />,
  },
  {
    path: routes.room,
    element: <RoomPage />,
  },
];

/* - - - COMPONENT - - - */
const AppContent = () => {
  /* - - - DESTRUCTING - - - */

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <Routes>
      {pages.map((page) => (
        <Route
          path={page.path}
          element={page.element}
        />
      ))}

      <Route
        path='*'
        element={
          <Navigate
            to={routes.home}
            replace
          />
        }
      />
    </Routes>
  );
};

export default AppContent;
