angular
  .module('tables')
  .directive('ngFileShow', ngFileShow);

  ngFileShow.$inject = ['config'];

  function ngFileShow(config) {
    return {
      restrict: 'A',
      scope: {
        tdValue: '=',
      },
      link: function (scope, element, att, ctrl) {
        scope.serverName = window.location.origin;

        var myRegex = /(jpg|jpeg|gif|png)((\?.*)$|$)/g.test(scope.tdValue);

        if (myRegex) {
          //const fullPath = `${scope.serverName}/${scope.tdValue}`;
          const newPath = `${config.apiUrl}/${scope.tdValue}`;
          const image = `<img src="${newPath}" heigth="100" width="100" />`;
          angular.element(element).html(image);
        }
      },
    };
  }
