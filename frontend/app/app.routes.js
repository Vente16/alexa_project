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
        templateUrl: 'app/forms/form-builder.html',
        //controller: 'MainController',
      })
      .when('/login', {
        title: 'Iniciar Session',
        templateUrl: 'app/auth/login.html',
        controller: 'LoginController',
      })
      .when('/404', {
        templateUrl: 'app/layout/404.html',
        //controller: 'MainController',
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
          /*FormsPrepared: function (FormService) {
            return FormService.getFormBuilder(3);
          }, */
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

