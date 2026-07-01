import { Navigate, Outlet } from 'react-router-dom';
import routes from '../../utils/routes/routes';
import useSelector from '../../utils/hooks/redux/useSelector';
import { selectIsAuthenticated } from '../../utils/store/slices/identity';

/* - - - STATIC ELEMENTS - - - */

/* - - - COMPONENT - - - */
const PublicRoute = () => {
  /* - - - DESTRUCTING - - - */
  const isAuthenticated = useSelector(selectIsAuthenticated);

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  if (isAuthenticated)
    return (
      <Navigate
        to={routes.home}
        replace
      />
    );

  return <Outlet />;
};

export default PublicRoute;
