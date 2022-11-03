app.controller('MainController', MainController);

MainController.$inject = ['$scope', '$location', 'SideBarservice'];

function MainController($scope, $location, SideBarservice) {
  var vm = this;
  $scope.name = 'John';
  $scope.currentYear = new Date().getFullYear();
  $scope.toogle = false;
  console.log('principal: ', $location.path());
  $scope.$on('sidebarEvent', function () {
    console.log('eventt:: adad', 'addada');
    $scope.toogle = SideBarservice.getToogle();
  });
}
