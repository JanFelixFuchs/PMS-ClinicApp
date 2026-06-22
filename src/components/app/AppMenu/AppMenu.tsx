import { Menu, type MenuProps } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../../utils/routes/routes';
import IconPatient from '../../icons/IconPatient';
import styles from './AppMenu.module.css';
import IconHome from '../../icons/IconHome';
import IconDevice from '../../icons/IconDevice';
import IconClinician from '../../icons/IconClinician';
import IconRoom from '../../icons/IconRoom';
import IconAppointment from '../../icons/IconAppointment';
import IconIdentity from '../../icons/IconIdentity';
import { useTranslation } from 'react-i18next';
import { useState, type ReactNode } from 'react';
import type { App } from '../../../utils/types/apps/Apps';
import type { ProtectedPage } from '../../../utils/types/pages/PageGroups';

/* - - - STATIC ELEMENTS - - - */
type MenuItem = Required<MenuProps>['items'][number];

type LeafMenuItemData = {
  route: ProtectedPage;
  icon?: ReactNode;
};

type NonLeafMenuItemData = {
  appName: App;
  icon: ReactNode;
  children: LeafMenuItemData[];
};

interface Props {
  collapsed: boolean;
}

const menuItemsData: (NonLeafMenuItemData | LeafMenuItemData)[] = [
  {
    route: 'home',
    icon: <IconHome />,
  },
  {
    appName: 'appointments',
    icon: <IconAppointment />,
    children: [
      {
        route: 'appointments',
      },
      {
        route: 'appointmentCategories',
      },
    ],
  },
  {
    route: 'patients',
    icon: <IconPatient />,
  },
  {
    appName: 'devices',
    icon: <IconDevice />,
    children: [
      {
        route: 'devices',
      },
      {
        route: 'deviceCategories',
      },
    ],
  },
  {
    appName: 'clinicians',
    icon: <IconClinician />,
    children: [
      {
        route: 'clinicians',
      },
      {
        route: 'clinicianCategories',
      },
    ],
  },
  {
    appName: 'rooms',
    icon: <IconRoom />,
    children: [
      {
        route: 'rooms',
      },
      {
        route: 'roomCategories',
      },
    ],
  },
  {
    appName: 'identity',
    icon: <IconIdentity />,
    children: [
      {
        route: 'users',
      },
      {
        route: 'roles',
      },
    ],
  },
];

const isNonLeafMenuItemData = (
  menuItemData: LeafMenuItemData | NonLeafMenuItemData
) => 'children' in menuItemData;

const leafMenuItemKeys = menuItemsData.flatMap((menuItemData) => {
  return isNonLeafMenuItemData(menuItemData)
    ? menuItemData.children.map((child) => routes[child.route])
    : routes[menuItemData.route];
});

/* - - - COMPONENT - - - */
const AppMenu = ({ collapsed }: Props) => {
  /* - - - DESTRUCTING - - - */
  const { t } = useTranslation();
  const location = useLocation();

  /* - - - STATE VARIABLES - - - */
  const [currentOpenKeys, setCurrentOpenKeys] = useState<string[]>([]);

  /* - - - VARIABLES - - - */
  const menuItems: MenuItem[] = menuItemsData.map((menuItemData) => {
    // mapping leaf menu items
    if (!isNonLeafMenuItemData(menuItemData)) {
      return {
        key: routes[menuItemData.route],
        label: (
          <Link to={routes[menuItemData.route]}>
            {t(`page.${menuItemData.route}.title`)}
          </Link>
        ),
        icon: menuItemData.icon,
      };
    }

    // mapping non-leaf menu items
    return {
      key: `menuItem-${menuItemData.appName}`,
      label: t(`menu.appLabel.${menuItemData.appName}`),
      icon: menuItemData.icon,
      children: menuItemData.children.map((child) => {
        return {
          key: routes[child.route],
          label: (
            <Link to={routes[child.route]}>
              {t(`page.${child.route}.title`)}
            </Link>
          ),
          icon: child.icon,
        };
      }),
    };
  });

  const selectedKey = leafMenuItemKeys.find((leafMenuItemKey) =>
    location.pathname.startsWith(leafMenuItemKey)
  );

  /* - - - FUNCTIONS - - - */
  const openKeysHandler: MenuProps['onOpenChange'] = (openKeys) => {
    // determining latest opened key
    const latestOpenKey = openKeys.find(
      (openKey) => currentOpenKeys.indexOf(openKey) === -1
    );

    // setting current open keys
    setCurrentOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  /* - - - USE EFFECTS - - - */

  /* - - - RETURN - - - */
  return (
    <Menu
      classNames={{
        root: styles['menu-root'] ?? '',
        itemIcon: styles['menu-item-icon'] ?? '',
      }}
      items={menuItems}
      mode='inline'
      tooltip={false}
      inlineCollapsed={collapsed}
      onOpenChange={openKeysHandler}
      openKeys={currentOpenKeys}
      selectedKeys={[selectedKey ?? '']}
    />
  );
};

export default AppMenu;
