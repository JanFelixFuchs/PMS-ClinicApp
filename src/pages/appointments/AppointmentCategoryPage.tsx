import { useTranslation } from 'react-i18next';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import IconAppointment from '../../components/icons/IconAppointment';

/* - - - STATIC ELEMENTS - - - */

const AppointmentCategoryPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('appointmentCategoryPage', t)}
      icon={IconAppointment}
      title={t('page.appointmentCategory.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default AppointmentCategoryPage;
