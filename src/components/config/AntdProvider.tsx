import { useTranslation } from 'react-i18next';
import { ConfigProvider } from 'antd';
import antdTheme from '../../utils/config/antdTheme';
import { antdLocales } from '../../utils/config/antdLocale';
import type { PropsWithChildren } from 'react';

/* - - - STATIC ELEMENTS - - - */

/* - - - COMPONENT - - - */
const AntdProvider = ({ children }: PropsWithChildren) => {
  /* - - - DESTRUCTING - - - */
  const { i18n } = useTranslation();

  /* - - - STATE VARIABLES - - - */

  /* - - - VARIABLES - - - */

  /* - - - FUNCTIONS - - - */

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <ConfigProvider
      theme={antdTheme}
      locale={antdLocales[i18n.language]!}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
