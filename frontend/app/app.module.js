var app = angular.module('alexaApp', ['ngRoute', 'forms', 'tables']);

angular
  .module('alexaApp')
  .constant('config', {
    apiUrl: 'http://localhost:8888/alexa',
    baseUrl: '/',
    enableDebug: true,
  })
  .constant('_', window._)
  .run(function ($rootScope) {
    $rootScope._ = window._;
  });
