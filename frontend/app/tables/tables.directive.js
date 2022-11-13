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
        tableName: '@',
        deleteFn: '&',
      },
      templateUrl: 'app/tables/table-directive.html',
      link: function (scope, element, att, ctrl) {
        scope.serverName = window.location.origin;
        scope.dataDelete = {};
        scope.deleteFn = function($event, table, item){
          $event.preventDefault();
          scope.dataDelete = { table, item };
        }

        scope.launchEvent = function(){
          scope.$emit('deleteItemTable', scope.dataDelete);
        }

      },
    };
  }
