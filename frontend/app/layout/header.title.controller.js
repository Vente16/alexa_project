angular
  .module('alexaApp')
  .controller('HeaderTitleController', HeaderTitleController);

  HeaderTitleController.$inject = [
    '$scope',
    '$location',
    'modules',
    'AuthService',
  ];

  function HeaderTitleController(
    $scope,
    $location,
    modules,
    AuthService,
  ) {
    $scope.currentPath = $location.path();
    $scope.list = modules;
    $scope.token = AuthService.checkToken();
    $scope.tokenDecoded = AuthService.getDataToken();
    $scope.fullName = `${$scope.tokenDecoded.NOMBRE} ${$scope.tokenDecoded.APELLIDO}`;
  
    $scope.logout = function ($event) {
      $event.preventDefault();
      AuthService.logout();
    };
  }
