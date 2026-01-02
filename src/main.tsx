import { createRoot } from 'react-dom/client';
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './components/app/AppContainer/AppContainer';
import { Provider } from 'react-redux';
import configureStore from './utils/store/configureStore';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/config/i18next';
import LoginPage from './pages/login/LoginPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import ProtectedRoute from './components/routes/ProtectedRoute';
import routes from './utils/routes/routes';
import AntdProvider from './components/config/AntdProvider';

const store = configureStore();

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AntdProvider>
          <Routes>
            <Route
              path={routes.login}
              element={<LoginPage />}
            />
            <Route
              path={routes.registration}
              element={<RegistrationPage />}
            />

            <Route
              path='*'
              element={
                <ProtectedRoute>
                  <AppContainer />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AntdProvider>
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
);
