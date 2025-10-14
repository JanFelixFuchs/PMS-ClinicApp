import { useTranslation } from 'react-i18next';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import IconPatient from '../../components/icons/IconPatient';

/* - - - STATIC ELEMENTS - - - */

const PatientPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('patientPage', t)}
      icon={IconPatient}
      title={t('page.patient.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default PatientPage;
