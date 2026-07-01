import { Layout } from 'antd';
import AppHeader from '../AppHeader/AppHeader';
import Sider from 'antd/es/layout/Sider';
import styles from './AppContainer.module.css';
import AppMenu from '../AppMenu/AppMenu';
import AppContent from '../AppContent/AppContent';
import useSelector from '../../../utils/hooks/redux/useSelector';
import { selectSidebarStatus } from '../../../utils/store/slices/ui';
import { useState } from 'react';

/* - - - STATIC ELEMENTS - - - */

/* - - - COMPONENT - - - */
const AppContainer = () => {
  /* - - - DESTRUCTING - - - */
  const sidebarStatus = useSelector(selectSidebarStatus);

  /* - - - STATE VARIABLES - - - */
  const [isBreakpointCollapsed, setIsBreakpointCollapsed] =
    useState<boolean>(false);

  /* - - - VARIABLES - - - */
  const collapsed = sidebarStatus === 'collapsed' || isBreakpointCollapsed;
  const siderWidth = collapsed ? '5rem' : '16rem';

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <Layout className={styles['layout-container'] ?? ''}>
      <AppHeader />

      <Layout>
        <Sider
          collapsed={sidebarStatus === 'collapsed'}
          width={siderWidth}
          breakpoint='md'
          onBreakpoint={(broken) => setIsBreakpointCollapsed(broken)}
        >
          <AppMenu collapsed={collapsed} />
        </Sider>

        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppContainer;
