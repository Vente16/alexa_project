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
      /* .when('/tutorials', {
      templateUrl: 'form-builder.html',
      //controller: 'tutorialsController',
    }) */
      /*.when('/courses', {
      templateUrl: 'courses.html',
      controller: 'coursesController',
    })
    .when('/projectideas', {
      templateUrl: 'projectideas.html',
      controller: 'projectideasController',
    }) */
      .otherwise({ redirectTo: '/' });
  }

