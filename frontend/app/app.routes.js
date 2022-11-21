angular
  .module('alexaApp')
  .config(routes)
  .run(titleConfig);

  titleConfig.$inject = ['$rootScope', '$route', '$location', 'AuthService'];

  function titleConfig($rootScope, $route, $location, AuthService) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      let token = AuthService.checkToken();
      if (!token) {
        $location.path('/login');
        $location.replace();
      }

      if (token && $location.path() === '/login') {
        $location.path('/');
        $location.replace();
      }

      $rootScope.title = current.$$route.title;
      $rootScope.subTitle = current.$$route.subTitle;
      $rootScope.module = current.$$route.module;
      $rootScope.main = current.$$route.main;
    });
  }

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/dashboard/dashboard.html',
      })
      .when('/login', {
        title: 'Iniciar Session',
        templateUrl: 'app/auth/login.html',
        controller: 'LoginController',
      })
      .when('/404', {
        templateUrl: 'app/layout/404.html',
      })
      .when('/products', {
        title: 'Productos',
        module: 'Productos',
        main: '/products',
        subTitle: 'Listado de productos',
        templateUrl: 'app/products/products.list.html',
        controller: 'ProductsController',
        resolve: {
          TablesPrepService: function (TablesService) {
            return TablesService.getDatatable(7);
          },
        },
      })
      .when('/products/new', {
        title: 'Nuevo producto',
        module: 'Productos',
        main: '/products',
        templateUrl: 'app/products/form.products.html',
        controller: 'ProductosNewController',
        resolve: {
          FormsPrepared: function (FormService) {
            return FormService.getFormBuilder(4);
          },
        },
      })
      .when('/products/edit/:id', {
        title: 'Editar producto',
        module: 'Productos',
        main: '/products',
        templateUrl: 'app/products/products.edit.html',
        controller: 'ProductEditController',
        resolve: {
          FormsPrepared: function ($route, FormService) {
            return FormService.getFormData(
              $route.current.params.id,
              'PRODUCTS',
            );
          },
        },
      })
      .when('/clients', {
        title: 'Clientes',
        module: 'Clientes',
        main: '/clients',
        subTitle: 'Listado de clientes',
        templateUrl: 'app/clients/clients.list.html',
        controller: 'ClientsController',
        resolve: {
          TablesPrepService: function (TablesService) {
            return TablesService.getDatatable(9);
          },
        },
      })
      .when('/clients/new', {
        title: 'Nuevo cliente',
        module: 'Clients',
        main: '/clients',
        templateUrl: 'app/clients/form.clients.html',
        controller: 'ClientNewController',
        resolve: {
          FormsPrepared: function (FormService) {
            return FormService.getFormBuilder(7);
          },
        },
      })
      .when('/clients/edit/:id', {
        title: 'Editar cliente',
        module: 'Clientes',
        main: '/clients',
        templateUrl: 'app/clients/clients.edit.html',
        controller: 'ClientEditController',
        resolve: {
          FormsPrepared: function ($route, FormService) {
            return FormService.getFormData($route.current.params.id, 'CLIENTS');
          },
        },
      })
      .when('/providers', {
        title: 'Proveedores',
        module: 'Proveedores',
        main: '/providers',
        subTitle: 'Listado de proveedores',
        templateUrl: 'app/providers/providers.list.html',
        controller: 'ProvidersController',
        resolve: {
          TablesPrepService: function (TablesService) {
            return TablesService.getDatatable(10);
          },
        },
      })
      .when('/providers/new', {
        title: 'Nuevo proveedor',
        module: 'providers',
        main: '/providers',
        templateUrl: 'app/providers/form.providers.html',
        controller: 'ProviderNewController',
        resolve: {
          FormsPrepared: function (FormService) {
            return FormService.getFormBuilder(8);
          },
        },
      })
      .when('/providers/edit/:id', {
        title: 'Editar cliente',
        module: 'providers',
        main: '/providers',
        templateUrl: 'app/providers/providers.edit.html',
        controller: 'ProvidersEditController',
        resolve: {
          FormsPrepared: function ($route, FormService) {
            return FormService.getFormData(
              $route.current.params.id,
              'PROVIDERS',
            );
          },
        },
      })
      .when('/users', {
        title: 'Usuarios',
        module: 'Usuarios',
        main: '/users',
        subTitle: 'Listado de usuarios',
        templateUrl: 'app/users/users.list.html',
        controller: 'UsersController',
        resolve: {
          TablesPrepService: function (TablesService) {
            return TablesService.getDatatable(11);
          },
        },
      })
      .when('/users/new', {
        title: 'Nuevo usuario',
        module: 'users',
        main: '/users',
        templateUrl: 'app/users/form.users.html',
        controller: 'UserNewController',
        resolve: {
          FormsPrepared: function (FormService) {
            return FormService.getFormBuilder(9);
          },
        },
      })
      .when('/users/edit/:id', {
        title: 'Editar usuario',
        module: 'users',
        main: '/users',
        templateUrl: 'app/users/users.edit.html',
        controller: 'UsersEditController',
        resolve: {
          FormsPrepared: function ($route, FormService) {
            return FormService.getFormData($route.current.params.id, 'USERS');
          },
        },
      })
      .when('/tables', {
        templateUrl: 'app/tables/tables.html',
        controller: 'TablesController',
        resolve: {
          TablesPrepService: function (TablesService) {
            return TablesService.getDatatable(1);
          },
        },
      })
      .when('/tables/new', {
        templateUrl: 'app/tables/tables-builder.html',
        controller: 'TablesBuilderController',
      })
      .when('/forms', {
        templateUrl: 'app/forms/form-builder.html',
        controller: 'FormBuilderController',
      })
      .otherwise({ redirectTo: '/' });
  }

