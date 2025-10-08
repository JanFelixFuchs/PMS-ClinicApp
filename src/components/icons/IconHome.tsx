import { useTranslation } from 'react-i18next';
import icon from '../../assets/icons/icon_home.png';

/* - - - STATIC ELEMENTS - - - */
interface Props {
  className?: string;
}

/* - - - COMPONENT - - - */
const IconHome = ({ className }: Props) => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <img
      alt={t('picture.icon.home.alternativeText')}
      className={className}
      src={icon}
    />
  );
};

export default IconHome;
