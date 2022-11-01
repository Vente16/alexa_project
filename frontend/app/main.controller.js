app.controller('MainController', MainController);

MainController.$inject = ['$scope', 'SideBarservice'];

function MainController($scope, SideBarservice) {
    var vm = this;
    $scope.name = 'John';
    $scope.currentYear = new Date().getFullYear();
    $scope.toogle = false;
    $scope.$on('sidebarEvent', function () {
        $scope.toogle = SideBarservice.getToogle();

    });
}
