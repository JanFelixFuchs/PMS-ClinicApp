import { useTranslation } from 'react-i18next';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconDevice from '../../components/icons/IconDevice';

/* - - - STATIC ELEMENTS - - - */

const DeviceCategoryPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('deviceCategoryPage', t)}
      icon={IconDevice}
      title={t('page.deviceCategory.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default DeviceCategoryPage;
