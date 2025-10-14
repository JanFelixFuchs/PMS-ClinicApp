import { useTranslation } from 'react-i18next';
import IconRoom from '../../components/icons/IconRoom';
import PageSkeleton from '../../components/skeletons/PageSkeleton';
import { getBreadcrumbItems } from '../../utils/routes/breadcrumbs';

/* - - - STATIC ELEMENTS - - - */

const RoomPage = () => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <PageSkeleton
      breadcrumbItems={getBreadcrumbItems('roomPage', t)}
      icon={IconRoom}
      title={t('page.room.title')}
    >
      Placeholder
    </PageSkeleton>
  );
};

export default RoomPage;
