angular
  .module('tables')
  .controller('TablesBuilderController', TablesBuilderController);

  TablesBuilderController.$inject = ['$scope'];

  function TablesBuilderController($scope) {
    $scope._ = _;

    $scope.tableNames = {
      USERS: ['ID', 'NOMBRE', 'APELLIDO', 'PASSWORD'],
      PRODUCTS: ['ID', 'NOMBRE', 'PRECIO'],
    };

    $scope.tableSelected = '';
    $scope.fieldsSlected = { ID: true };

    $scope.dataTableOpt = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
      aLengthMenu: [
        [10, 50, 100, -1],
        [10, 50, 100, 'All'],
      ],
      "order": [[ 5, "desc" ]],
      "iDisplayLength": 25,
      aoSearchCols: [null],
      destroy: true
    };

    $scope.dataTableInfo = {
      header: [],
      records: []
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
      const fieldsFilter = (key, index, arr) => $scope.fieldsSlected[key];
      let fieldsFiltered = [...Object.keys($scope.fieldsSlected).filter(fieldsFilter), 'ACTION'];
      let tableDate = {
        name: $scope.tableSelected,
        fields: $scope.fieldsSlected,
        fieldsFiltered,
      };

      const dataGenerated = Array(3).fill({}).reduce((acc, current) => {
          let data = fieldsFiltered.reduce((objc, curval) => ({...objc, [curval]: curval=== 'ACTION' ? '': 'test'}), {})
          return [...acc, data];
      }, []);
      $scope.dataTableInfo.header = fieldsFiltered;
      $scope.dataTableInfo.records = dataGenerated;
      $scope.$broadcast('hi', {
        msg: 'str',
      });
    };

  }
