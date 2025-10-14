import { useTranslation } from 'react-i18next';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconIdentity from '../../components/icons/IconIdentity';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';

/* - - - STATIC ELEMENTS - - - */

const RolePage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('rolePage', t)}
      icon={IconIdentity}
      title={t('page.role.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default RolePage;
