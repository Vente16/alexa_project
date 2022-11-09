angular
  .module('files')
  .directive('fileValidation', fileValidation);

  function fileValidation() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, el, attrs, ngModel) {
        //change event is fired when file is selected
        el.bind('change', function () {
          scope.$apply(function () {
            ngModel.$setViewValue(el.val());
            ngModel.$render();
          });
        });
      },
    };
  }


