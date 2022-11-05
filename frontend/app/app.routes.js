angular
  .module('alexaApp')
  .config(routes);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/forms/form-builder.html',
        //controller: 'MainController',
      })
      .when('/404', {
        templateUrl: 'app/layout/404.html',
        //controller: 'MainController',
      })
      .when('/products', {
        templateUrl: 'app/products/form.productos.html',
        controller: 'ProductosController',
        resolve: {
          FormsPrepared: function (FormService) {
            return FormService.getFormBuilder(3);
          },
        },
      })
      .when('/products/edit/:id', {
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

