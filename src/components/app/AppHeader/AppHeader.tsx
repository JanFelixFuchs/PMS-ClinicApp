import { Flex } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import styles from './AppHeader.module.css';
import Logo from '../../logos/Logo';
import useSelector from '../../../utils/hooks/useSelector';
import { selectClinic, selectUser } from '../../../utils/store/slices/identity';
import { useNavigate } from 'react-router-dom';
import routes from '../../../utils/routes/routes';

/* - - - STATIC ELEMENTS - - - */

/* - - - COMPONENT - - - */
const AppHeader = () => {
  /* - - - DESTRUCTING - - - */
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const clinic = useSelector(selectClinic);

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  const logoClickHandler = () => navigate(routes.home);

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <Header className={styles['header-container'] ?? ''}>
      <Flex
        align='center'
        className={styles['flex-container'] ?? ''}
      >
        <Logo
          className={styles['logo'] ?? ''}
          onClick={logoClickHandler}
        />
        <Title
          className={styles['header-title'] ?? ''}
          level={3}
        >
          {clinic.name}
        </Title>
      </Flex>
      <Title
        className={styles['header-title'] ?? ''}
        level={3}
      >
        {user.firstName}
      </Title>
    </Header>
  );
};

export default AppHeader;
