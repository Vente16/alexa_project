angular
  .module('alexaApp')
  .config(routes);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/forms/form-builder.html',
        controller: 'FormBuilderController',
      })
      .when('/tables', {
        templateUrl: 'app/tables/tables-builder.html',
        controller: 'TablesBuilderController',
      })
      .when('/forms', {
        templateUrl: 'app/forms/form-builder.html',
        controller: 'FormBuilderController',
      })
      .otherwise({ redirectTo: '/' });
  }

