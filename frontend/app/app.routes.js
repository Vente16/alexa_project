angular
  .module('alexaApp')
  .config(routes);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/forms/form-builder.html',
        //controller: 'MainController',
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

