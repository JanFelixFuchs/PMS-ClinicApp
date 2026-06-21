import { createRoot } from 'react-dom/client';
import './main.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './utils/store/configureStore';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/config/i18next';
import AntdProvider from './components/config/AntdProvider';
import AppRoot from './components/app/AppRoot/AppRoot';

const store = configureStore();

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AntdProvider>
          <AppRoot />
        </AntdProvider>
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
);
