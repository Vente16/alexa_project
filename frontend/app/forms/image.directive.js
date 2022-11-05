angular
  .module('forms')
  .directive('ngCheckFormat', ngCheckFormat);

  ngCheckFormat.$inject = ['config'];

  function ngCheckFormat(config) {
    return {
      restrict: 'A',
      scope: {
        imageSource: '=',
        src: '@',
      },
      link: function (scope, element, att) {
        var myRegex = /(jpg|jpeg|gif|png)((\?.*)$|$)/g.test(scope.imageSource);
        if (myRegex) {
          angular
            .element(element)
            .attr('src', `${config.apiUrl}/${scope.imageSource}`);
        }
      },
    };
  }
