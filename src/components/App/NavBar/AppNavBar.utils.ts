import { IconName } from 'components/Core';

export type IAppNavBarItem = {
  isAdmin?: boolean;
  key?: string;
  name?: string;
  icon?: IconName;
  path?: string;
  onClick?: Function;
  status?: 'concept' | 'pre-alpha' | 'alpha' | 'beta' | 'ready';
  isDivider?: boolean;
}


export const whiteListedPaths = [
  // admin
  '/v1/admin',
  '/v1/admin/users',
  '/v1/admin/dashboard',
  '/v1/admin/finances',
  '/v1/admin/maintenance',
  '/v1/admin/marketing',
  '/v1/admin/messaging',
  '/v1/admin/analytics',
  // users
  '/v1/dashboard',
  // '/v2/dashboard',
  // FEATURES

  // management
  '/v1/controls',
  '/v1/documents',
  '/v1/dialogues',
  '/v1/graphs',
  '/v1/segments',
  // ai
  '/v1/ai',
  // creative
  '/v1/characters',
  '/v1/creatures',
  '/v1/locations',
  '/v1/objects',
  '/v1/transports',
  //
  // '/v1/multimedia',

  // misc
  '/v1/account',
  '/v1/maps',
  '/v1/entertainment',
  '/v1/scheduling',
];

export const navbarItems: IAppNavBarItem[] = [
  {
    icon: 'dashboard',
    key: 'dashboard',
    name: 'Dashboard',
    path: '/v2/dashboard',
  },
  { isDivider: true },
  {
    key: 'places',
    name: 'Places',
    path: '/v1/places',
    icon: 'locations',
  },
  {
    key: 'entertainment',
    name: 'Entertainment',
    path: '/v1/entertainment',
    icon: 'video'
  },
  {
    key: 'schedule',
    name: 'Scheduling',
    path: '/v1/schedule',
    icon: 'workspaces'
  },
  { isDivider: true },
];