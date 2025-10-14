import { useTranslation } from 'react-i18next';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import IconHome from '../../components/icons/IconHome';

/* - - - STATIC ELEMENTS - - - */

const HomePage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('homePage', t)}
      icon={IconHome}
      title={t('page.home.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default HomePage;
