import { useTranslation } from 'react-i18next';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconAppointment from '../../components/icons/IconAppointment';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';

/* - - - STATIC ELEMENTS - - - */

const AppointmentCategoriesPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('appointmentCategoriesPage', t)}
      icon={IconAppointment}
      title={t('page.appointmentCategories.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default AppointmentCategoriesPage;
