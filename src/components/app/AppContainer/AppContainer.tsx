import { Layout } from 'antd';
import AppHeader from '../AppHeader/AppHeader';
import Sider from 'antd/es/layout/Sider';
import styles from './AppContainer.module.css';
import AppMenu from '../AppMenu/AppMenu';
import AppContent from '../AppContent/AppContent';

/* - - - STATIC ELEMENTS - - - */

/* - - - COMPONENT - - - */
const AppContainer = () => {
  /* - - - DESTRUCTING - - - */

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <Layout className={styles['layout-container'] ?? ''}>
      <AppHeader />

      <Layout>
        <Sider
          width='13vw'
          breakpoint='lg'
        >
          <AppMenu />
        </Sider>

        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppContainer;
