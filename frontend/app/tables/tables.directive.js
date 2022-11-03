angular
  .module('tables')
  .directive('ngDataTable', ngDataTable);

  ngDataTable.$inject = ['$compile'];

  function ngDataTable($compile) {
    return {
      restrict: 'E',
      scope: {
        tableRecords: '=',
        tableOptions: '=',
        tableBulildType: '@'
      },
      /*controller: '@',
      name: 'controllerName', */
      templateUrl: 'app/tables/table-directive.html',
      link: function ($scope, element, att, ctrl) {
      },
    };
  }
