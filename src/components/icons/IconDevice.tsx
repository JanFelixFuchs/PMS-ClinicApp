import { useTranslation } from 'react-i18next';
import icon from '../../assets/icons/icon_device.png';

/* - - - STATIC ELEMENTS - - - */
interface Props {
  className?: string;
}

/* - - - COMPONENT - - - */
const IconDevice = ({ className }: Props) => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <img
      alt={t('picture.icon.device.alternativeText')}
      className={className}
      src={icon}
    />
  );
};

export default IconDevice;
