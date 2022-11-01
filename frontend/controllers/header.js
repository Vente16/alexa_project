app.controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope', '$rootScope', 'SideBarservice'];

function HeaderController($scope, $rootScope, SideBarservice) {
  $scope.testing = 'Oeee llave';
  $scope.toogleSidebar = function () {
    SideBarservice.toogle();
    $rootScope.$broadcast("sidebarEvent", 'toogle');
    console.log('new value:', SideBarservice.getToogle());
    //
  };
}
