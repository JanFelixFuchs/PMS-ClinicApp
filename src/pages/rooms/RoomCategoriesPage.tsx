import { useTranslation } from 'react-i18next';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import IconRoom from '../../components/icons/IconRoom';

/* - - - STATIC ELEMENTS - - - */

const RoomCategoriesPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('roomCategoriesPage', t)}
      icon={IconRoom}
      title={t('page.roomCategories.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default RoomCategoriesPage;
