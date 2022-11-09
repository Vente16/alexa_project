angular
  .module('tables')
  .directive('ngDataTable', ngDataTable);

  function ngDataTable() {
    return {
      restrict: 'E',
      scope: {
        tableRecords: '=',
        tableOptions: '=',
        tableBulildType: '@',
        tablePath: '@',
      },
      templateUrl: 'app/tables/table-directive.html',
      link: function ($scope, element, att, ctrl) {
        $scope.serverName = window.location.origin;
      },
    };
  }
