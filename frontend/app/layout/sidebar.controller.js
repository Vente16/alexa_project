angular
  .module('alexaApp')
  .controller('SidebarController', SidebarController);

  SidebarController.$inject = [
    '$scope',
    '$location',
    'modules',
    'SideBarservice',
  ];

  function SidebarController($scope, $location, modules, SideBarservice) {
    $scope.toogle = SideBarservice.getToogle();
    $scope.currentPath = $location.path();
    $scope.list = modules;
    $scope.itemClick = function(item){
      $scope.currentPath = item.path;
    }
  }
