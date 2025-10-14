import { useTranslation } from 'react-i18next';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconClinician from '../../components/icons/IconClinician';

/* - - - STATIC ELEMENTS - - - */

const ClinicianPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('clinicianPage', t)}
      icon={IconClinician}
      title={t('page.clinician.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default ClinicianPage;
