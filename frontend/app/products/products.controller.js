angular.module('products').controller('ProductsController', ProductsController);

ProductsController.$inject = [
  '$scope',
  '$location',
  'datatableOptions',
  'modules',
  'TablesPrepService',
];

function ProductsController(
  $scope,
  $location,
  datatableOptions,
  modules,
  TablesPrepService,
) {
  $scope._ = _;
  $scope.dataTableConfig = datatableOptions;

  const filterPath = (el) => el.path === $location.path();
  $scope.myModule = [...modules].filter(filterPath)[0];

  $scope.dataTableInfo = TablesPrepService ? TablesPrepService.data : [];
}
