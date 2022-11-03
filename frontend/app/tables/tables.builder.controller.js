angular
  .module('tables')
  .controller('TablesBuilderController', TablesBuilderController);

  TablesBuilderController.$inject = [
    '$scope',
    'TablesService',
  ];

  function TablesBuilderController($scope, TablesService) {
    $scope._ = _;

    $scope.tableNames = {};

    $scope.buildToSave = {};

    $scope.showTable = true;

    $scope.database = TablesService.getTableBuilder()
      .then(({ data }) => {
        $scope.tableNames = data;
        console.log($scope.tableNames);
      })
      .catch((err) => {
        $.notify('Ha occurrido un error con la carga de tablas', 'error');
      });

    $scope.tableSelected = '';
    $scope.fieldsSlected = { ID: true };
    $scope.builderName = '';

    $scope.dataTableInfo = {
      header: [],
      records: [],
    };

    $scope.showDataTable = false;

    $scope.selectChange = function () {
      $scope.showDataTable = false;
      const addCheck = (prevVal, currentVal) => ({
        ...prevVal,
        [currentVal]: currentVal === 'ID',
      });
      let fields = $scope.tableNames[$scope.tableSelected].reduce(addCheck, {});
      $scope.fieldsSlected = fields;
    };

    $scope.buildTable = function () {
      if ($scope.tableSelected && $scope.builderName) {
        const fieldsFilter = (key, index, arr) => $scope.fieldsSlected[key];
        let fieldsFiltered = [
          ...Object.keys($scope.fieldsSlected).filter(fieldsFilter),
          'ACTION',
        ];
        let filedsFilteredJoined = [...fieldsFiltered].join(',');
        let tableDate = {
          name: $scope.builderName,
          tableName: $scope.tableSelected,
          fields: $scope.fieldsSlected,
          fieldsFiltered,
          filedsFilteredJoined,
        };

        $scope.buildToSave = { ...tableDate };

        const dataGenerated = Array(3)
          .fill({})
          .reduce((acc, current) => {
            let data = fieldsFiltered.reduce(
              (objc, curval) => ({
                ...objc,
                [curval]: curval === 'ACTION' ? '' : 'test',
              }),
              {},
            );
            return [...acc, data];
          }, []);
        $scope.dataTableInfo.header = fieldsFiltered;
        $scope.dataTableInfo.records = dataGenerated;
      } else {
        $.notify('Los campos deben ser completados', 'warn');
      }
    };

    $scope.toogleTable = function () {
      $scope.showTable = !$scope.showTable;
    };

    $scope.saveBuilder = function () {
      $scope.buildToSave.builder = JSON.stringify({ ...$scope.buildToSave });
      TablesService.saveTableBuilder($scope.buildToSave)
        .then(({ data }) => {
          $.notify('Se ha guardado correctamente', 'success');
        })
        .catch((err) => {
          $.notify('Ha occurrido un error con la carga de tablas', 'error');
        });
    };
  }
