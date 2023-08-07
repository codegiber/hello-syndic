const topMenuOptions = [
  {
    label: 'Accueil',
    icon: 'dashboard_icon',
    route: '/dashboard',
    position: 0,
  },
  {
    label: 'Les demandes',
    icon: 'alarm_icon',
    route: '/',

    position: 1,
  },
  {
    label: 'Administratif',
    icon: 'folder_icon',
    route: '/',

    position: 2,
  },
  {
    label: 'Assemblées générales',
    icon: 'users_icon',
    route: '/',
    position: 3,
  },

  {
    label: 'Mes inances',
    icon: 'finance_icon',
    route: '/',
    position: 4,
  },
];

const bottomMenuOptions = [
  {
    label: 'Conciergerie',
    icon: 'key_icon',
    route: '/',
    position: 0,
  },
  {
    label: 'Préferences',
    icon: 'preferences_icon',
    route: '/',
    position: 1,
  },
  {
    label: 'Extranet détaillé',
    icon: 'extra_folder_icon',
    route: '/',
    position: 2,
  },
  {
    label: 'Déconnexion',
    icon: 'logout_icon',
    route: '/',
    position: 3,
  },
];
export { topMenuOptions, bottomMenuOptions };
