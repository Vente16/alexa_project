var app = angular.module('alexaApp', [
  'ngRoute',
  'forms',
  'tables',
  'products',
]);

const MODULES = [
  {
    name: 'Tablas',
    path: '/tables',
    listBuild: 1,
    icon: 'ti-server',
    nameSecond: 'tables',
    formBuild: 1,
  },
  {
    name: 'Inicio',
    path: '/',
    listBuild: 1,
    icon: 'ti-dashboard',
    nameSecond: 'dashboard',
    formBuild: 1,
  },
  {
    name: 'Usuarios',
    path: '/users',
    listBuild: 1,
    icon: 'fa fa-users',
    nameSecond: 'users',
    formBuild: 1,
  },
  {
    name: 'Roles y Permisos',
    path: '/roles',
    listBuild: 1,
    icon: 'ti-dashboard',
    nameSecond: 'roles',
    formBuild: 1,
  },
  {
    name: 'Ventas',
    path: '/sells',
    listBuild: 1,
    icon: 'ti-receipt',
    nameSecond: 'sells',
    formBuild: 1,
  },
  {
    name: 'Productos',
    path: '/products',
    listBuild: 1,
    icon: 'ti-dropbox-alt',
    nameSecond: 'products',
    formBuild: 1,
  },
  {
    name: 'Inventario',
    path: '/inventary',
    listBuild: 1,
    icon: 'fa fa-table',
    nameSecond: 'inventary',
    formBuild: 1,
  },
  {
    name: 'Proveedores',
    path: '/providers',
    listBuild: 1,
    icon: 'ti-agenda',
    nameSecond: 'providers',
    formBuild: 1,
  },
  {
    name: 'Clientes',
    path: '/clients',
    listBuild: 1,
    icon: 'fa fa-user-secret',
    nameSecond: 'clients',
    formBuild: 1,
  },
];

const DATA_TABLE_OPTIONS = {
  language: {
    url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
  },
  aLengthMenu: [
    [10, 50, 100, -1],
    [10, 50, 100, 'All'],
  ],
  order: [[5, 'desc']],
  iDisplayLength: 25,
  aoSearchCols: [null],
  destroy: true,
};

angular
  .module('alexaApp')
  .constant('modules', MODULES)
  .constant('config', {
    apiUrl: 'http://localhost:8888/alexa',
    baseUrl: '/',
    enableDebug: true,
  })
  .constant('datatableOptions', DATA_TABLE_OPTIONS)
  .constant('_', window._)
  .run(function ($rootScope) {
    $rootScope._ = window._;
  });
