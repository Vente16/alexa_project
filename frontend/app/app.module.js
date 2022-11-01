var app = angular.module('alexaApp', ['ngRoute', 'forms', 'tables']);

angular
  .module('alexaApp')
  .constant('_', window._)
  .run(function ($rootScope) {
    $rootScope._ = window._;
  });
