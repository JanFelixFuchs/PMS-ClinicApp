import { useTranslation } from 'react-i18next';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import IconDevice from '../../components/icons/IconDevice';

/* - - - STATIC ELEMENTS - - - */

const DevicePage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('devicePage', t)}
      icon={IconDevice}
      title={t('page.device.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default DevicePage;
