import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import routes from '../../utils/routes/routes';
import useSelector from '../../utils/hooks/useSelector';
import { selectIsAuthenticated } from '../../utils/store/slices/identity';

/* - - - STATIC ELEMENTS - - - */
interface Props {
  children: JSX.Element;
}

/* - - - COMPONENT - - - */
const ProtectedRoute = ({ children }: Props) => {
  /* - - - DESTRUCTING - - - */
  const isAuthenticated = useSelector(selectIsAuthenticated);

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return isAuthenticated ? children : <Navigate to={routes.login} />;
};

export default ProtectedRoute;
