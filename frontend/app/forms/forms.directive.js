angular
  .module('forms')
  .directive('ngBuildForm', ngBuildForm);

  function ngBuildForm() {
    return {
      restrict: 'E',
      scope: {
        fields: '=',
        ngTypeForm: '@',
        ngButtonText: '@',
      },
      //controller: '@',
      //name: 'controllerName',
      templateUrl: 'app/forms/form-directive.html',
      link: function (scope, element, att) {
        scope.deleteField = function (index) {
          scope.$parent.deleteField(index);
        };

        scope.submitForm = function () {
          const form = angular.element('#dinamycForm');
          const data = new FormData();
          Array.from(form[0].elements).forEach((input) => {
            if (
              input.className.includes('input') &&
              input.type !== 'radio' &&
              input.value !== ''
            ) {
              data.append(input.name, input.value);
              if (input.type === 'file') {
                let trueValueFile = input.files[0];
                data.set(input.name, trueValueFile);
              }
            }
          });
          scope.$emit('formSubmitted', data);
        };
      },
    };
  }
