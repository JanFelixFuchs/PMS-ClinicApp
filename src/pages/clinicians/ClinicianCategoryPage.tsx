import { useTranslation } from 'react-i18next';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconClinician from '../../components/icons/IconClinician';

/* - - - STATIC ELEMENTS - - - */

const ClinicianCategoryPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('clinicianCategoryPage', t)}
      icon={IconClinician}
      title={t('page.clinicianCategory.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default ClinicianCategoryPage;
