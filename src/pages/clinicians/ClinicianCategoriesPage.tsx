import { useTranslation } from 'react-i18next';
import IconClinician from '../../components/icons/IconClinician';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';

/* - - - STATIC ELEMENTS - - - */

const ClinicianCategoriesPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('clinicianCategoriesPage', t)}
      icon={IconClinician}
      title={t('page.clinicianCategories.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default ClinicianCategoriesPage;
