import { useTranslation } from 'react-i18next';
import IconDevice from '../../components/icons/IconDevice';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';

/* - - - STATIC ELEMENTS - - - */

const DevicesPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('devicesPage', t)}
      icon={IconDevice}
      title={t('page.devices.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default DevicesPage;
