angular.module('products').controller('ProductsController', ProductsController);

ProductsController.$inject = [
  '$scope',
  '$location',
  'datatableOptions',
  'modules',
  'TablesPrepService',
  'TablesService',
];

function ProductsController(
  $scope,
  $location,
  datatableOptions,
  modules,
  TablesPrepService,
  TablesService,
) {
  $scope._ = _;
  $scope.dataTableConfig = datatableOptions;

  const filterPath = (el) => el.path === $location.path();
  $scope.myModule = [...modules].filter(filterPath)[0];

  angular.element('#exampleModal').modal('hide');

  $scope.$on('deleteItemTable', function (event, data) {
    const formatData = { module: data.table, id: data.item.ID };
    console.log(formatData);
    TablesService.deleteItemFromTable(formatData)
      .then((info) => {
        const modal = angular.element('.modal-backdrop');
        modal.removeClass('show');

        $.notify('Se ha eliminado el producto correctamente', 'success');
        window.location.reload();
      })
      .catch((err) => {
        $.notify('Ha occurrido un error al eliminar el producto', 'error');
      });
  });

  $scope.dataTableInfo = TablesPrepService ? TablesPrepService.data : [];
}
