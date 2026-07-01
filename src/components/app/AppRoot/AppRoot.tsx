import { Route, Routes } from 'react-router-dom';
import PublicRoute from '../../routes/PublicRoute';
import routes from '../../../utils/routes/routes';
import RegistrationPage from '../../../pages/registration/RegistrationPage';
import LoginPage from '../../../pages/login/LoginPage';
import ProtectedRoute from '../../routes/ProtectedRoute';
import AppContainer from '../AppContainer/AppContainer';
import { App } from 'antd';
import useDispatch from '../../../utils/hooks/redux/useDispatch';
import { useRefreshTokensMutation } from '../../../utils/store/slices/api/auth';
import { useEffect, useState } from 'react';
import { login } from '../../../utils/store/slices/identity';
import styles from './AppRoot.module.css';

/* - - - STATIC ELEMENTS - - - */

/* - - - COMPONENT - - - */
const AppRoot = () => {
  /* - - - DESTRUCTING - - - */
  const dispatch = useDispatch();
  const [refreshTokens] = useRefreshTokensMutation();

  /* - - - STATE VARIABLES - - - */
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */
  useEffect(() => {
    const initialize = async () => {
      try {
        const result = await refreshTokens().unwrap();
        dispatch(login({ ...result }));
      } catch {
        // user remains unauthenticated since no valid refresh token is present
      } finally {
        setIsInitialized(true);
      }
    };

    initialize();
  }, [dispatch, refreshTokens]);

  /* - - - RETURN - - - */
  if (!isInitialized) return null;

  return (
    <App className={styles['antDesign-app'] ?? ''}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route
            path={routes.login}
            element={<LoginPage />}
          />
          <Route
            path={routes.registration}
            element={<RegistrationPage />}
          />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
            path='*'
            element={<AppContainer />}
          />
        </Route>
      </Routes>
    </App>
  );
};

export default AppRoot;
