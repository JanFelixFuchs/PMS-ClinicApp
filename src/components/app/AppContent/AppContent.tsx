import { Navigate, Route, Routes } from 'react-router-dom';
import { pages } from '../../../utils/pages/pages';
import routes from '../../../utils/routes/routes';

/* - - - STATIC ELEMENTS - - - */
const protectedPages = Object.values(pages)
  .filter((page) => page.isProtected)
  .map((page) => ({ path: routes[page.name], element: page.element }));

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
      {protectedPages.map((page) => (
        <Route
          key={page.path}
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
