app.controller("SidebarController", SidebarController);

SidebarController.$inject = ["$scope", "$rootScope", "SideBarservice"];

function SidebarController($scope, $rootScope, SideBarservice) {
  $scope.girldfriend = "Sofi Mikl";
  $scope.toogle = SideBarservice.getToogle();
  //console.log("calling service", $scope.toogle);
}
