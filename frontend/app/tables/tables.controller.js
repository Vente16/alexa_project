angular
  .module('tables')
  .controller('TablesController', TablesController);

  TablesController.$inject = [
    '$scope',
    '$location',
    'datatableOptions',
    'modules',
    'TablesPrepService',
  ];

  function TablesController(
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

    $scope.dataTableInfo = TablesPrepService.data;
    
  }
