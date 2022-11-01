angular
  .module('forms')
  .directive('ngBuildForm', ngBuildForm);

  function ngBuildForm() {
    return {
      restrict: 'E',
      scope: {
        fields: '=',
        ngTypeForm: '@',
      },
      controller: '@',
      name: 'controllerName',
      templateUrl: 'app/forms/form-directive.html',
      link: function (scope, element, att) {
        scope.deleteField = function (index) {
          scope.$parent.deleteField(index);
        };
      },
    };
  }
