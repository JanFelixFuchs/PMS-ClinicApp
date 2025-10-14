import { useTranslation } from 'react-i18next';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconPatient from '../../components/icons/IconPatient';

/* - - - STATIC ELEMENTS - - - */

const PatientsPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('patientsPage', t)}
      icon={IconPatient}
      title={t('page.patients.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default PatientsPage;
