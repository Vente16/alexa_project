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
      //template: '<p>aadada: {{tableRecords.records.length}}</p>',
      controller: '@',
      name: 'controllerName',
      templateUrl: 'app/tables/table-directive.html',
      link: function ($scope, element, att, ctrl) {
        var template = element; //this can be done by below mentioned way
        //console.log(template);
        $scope.$on('hi', function (event, data) {

        });
       
        //element.append($compile(template)(scope));
        //console.log('directive controller: ', $scope);
        //console.log('dataTableInfo.lenght', $scope.dataTableInfo.records.length);
      },
    };
  }
