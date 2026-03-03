import { useTranslation } from 'react-i18next';
import icon from '../../assets/icons/icon_empty.png';

/* - - - STATIC ELEMENTS - - - */
interface Props {
  className?: string;
}

/* - - - COMPONENT - - - */
const IconEmpty = ({ className }: Props) => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <img
      alt={t('picture.icon.empty.alternativeText')}
      className={className}
      src={icon}
    />
  );
};

export default IconEmpty;
