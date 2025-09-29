import { useTranslation } from 'react-i18next';
import logo from '../../assets/logos/logo.svg';

/* - - - STATIC ELEMENTS - - - */
interface Props {
  className: string;
}

/* - - - COMPONENT - - - */
const Logo = ({ className }: Props) => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <img
      alt={t('picture.logo.alternativeText')}
      className={className}
      src={logo}
    />
  );
};

export default Logo;
