export const MENU = [
  {
    name: 'Dashboard',
    iconClasses: 'dashboard',
    path: ['/dashboard']
  },
  {
    name: 'Customers',
    iconClasses: 'business',
    path: ['/customers']
  },
  {
    name: 'Users',
    iconClasses: 'people',
    path: ['/users']
  },
  {
    name: 'Account',
    iconClasses: 'person',
    path: ['/account/profile']
  },
  {
    name: 'License',
    iconClasses: 'import_export',
    children: [
      {
        name: 'Add License',
        iconClasses: 'add_circle',
        path: ['/license/add'] // Example path, replace with the actual path
      },
      {
        name: 'View License',
        iconClasses: 'view_list',
        path: ['/license/view'] // Example path, replace with the actual path
      },     
    ],
    path: ['/license'] // Add the path property for the parent menu item
  },
  {
    name: 'Log out',
    iconClasses: 'exit_to_app',
    path: ['/auth/login']
  },
  {
    name: 'About',
    iconClasses: 'info_outline',
    path: ['/about'],
    subheader: true
  }
];
