angular
  .module('alexaApp')
  .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$rootScope', 'SideBarservice'];

  function HeaderController($scope, $rootScope, SideBarservice) {
    $scope.testing = 'Oeee llave';
    $scope.toogleSidebar = function () {
      SideBarservice.toogle();
      $scope.$emit('sidebarEvent', 'toogle');
    };
  }
