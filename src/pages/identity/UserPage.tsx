import { useTranslation } from 'react-i18next';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconIdentity from '../../components/icons/IconIdentity';

/* - - - STATIC ELEMENTS - - - */

const UserPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('userPage', t)}
      icon={IconIdentity}
      title={t('page.user.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default UserPage;
