import { useTranslation } from 'react-i18next';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconAppointment from '../../components/icons/IconAppointment';

/* - - - STATIC ELEMENTS - - - */

const AppointmentsPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('appointmentsPage', t)}
      icon={IconAppointment}
      title={t('page.appointments.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default AppointmentsPage;
