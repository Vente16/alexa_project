angular
  .module('alexaApp')
  .controller('HeaderTitleController', HeaderTitleController);

  HeaderTitleController.$inject = [
    '$scope',
    '$location',
    'modules',
  ];

  function HeaderTitleController($scope, $location, modules) {
    $scope.currentPath = $location.path();
    $scope.list = modules;
  }
