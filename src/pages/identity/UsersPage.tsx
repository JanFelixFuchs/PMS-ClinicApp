import { useTranslation } from 'react-i18next';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconIdentity from '../../components/icons/IconIdentity';

/* - - - STATIC ELEMENTS - - - */

const UsersPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('usersPage', t)}
      icon={IconIdentity}
      title={t('page.users.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default UsersPage;
