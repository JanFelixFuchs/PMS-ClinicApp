import { useTranslation } from 'react-i18next';
import IconRoom from '../../components/icons/IconRoom';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';
import PageSkeleton from '../../components/skeletons/PageSkeleton';

/* - - - STATIC ELEMENTS - - - */

const RoomsPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('roomsPage', t)}
      icon={IconRoom}
      title={t('page.rooms.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default RoomsPage;
