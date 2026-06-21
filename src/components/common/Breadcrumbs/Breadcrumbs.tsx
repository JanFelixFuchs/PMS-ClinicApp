import { Breadcrumb } from 'antd';
import styles from './Breadcrumbs.module.css';
import { useTranslation } from 'react-i18next';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { breadcrumbItemConfigs } from '../../../utils/breadcrumbs/breadcrumbs';
import { Link } from 'react-router-dom';
import routes from '../../../utils/routes/routes';
import type { ProtectedPage } from '../../../utils/types/pages/PageGroups';

/* - - - STATIC ELEMENTS - - - */
interface Props {
  page: ProtectedPage;
}

/* - - - COMPONENT - - - */
const Breadcrumbs = ({ page }: Props) => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */
  const items: ItemType[] = breadcrumbItemConfigs[page].map(
    ({ pageName, hasRoute }) => ({
      key: `breadcrumbItem-${pageName}`,
      title: hasRoute ? (
        <Link to={routes[pageName]}>{t(`page.${pageName}.title`)}</Link>
      ) : (
        t(`page.${pageName}.title`)
      ),
    })
  );

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <Breadcrumb
      className={styles['breadcrumb'] ?? ''}
      items={items}
    />
  );
};

export default Breadcrumbs;
