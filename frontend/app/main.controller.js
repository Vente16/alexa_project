angular
 .module('alexaApp')
 .controller('MainController', MainController);

MainController.$inject = [
  '$scope',
  '$location',
  'SideBarservice',
];

function MainController($scope, $location, SideBarservice) {
  $scope.currentYear = new Date().getFullYear();
  $scope.toogle = false;
  $scope.path = $location.path();

  $scope.$watch(
    function () {
      return localStorage.getItem('token');
    },
    function (newCodes, oldCodes) {
      $scope.token = newCodes;
    },
  );

  $scope.$on('sidebarEvent', function () {
    $scope.toogle = SideBarservice.getToogle();
  });
}
