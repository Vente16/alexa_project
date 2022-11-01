angular
  .module('files')
  .directive('ngFilePreview', ngFilePreview);

  ngFilePreview.$inject = ['FilesService'];

  function ngFilePreview(FilesService) {
    return {
      restrict: 'A',
      link: function (scope, el) {
        el.bind('change', function (e) {
          var url = (e.srcElement || e.target).files[0];
          var image = el.parent().find('.imagePreview') || null;
          FilesService.readAsDataUrl(url, scope).then(function (result) {
            if (image) {
              var imageSize = '100';
              image.attr('width', imageSize);
              image.attr('height', imageSize);
              image.attr('src', result);
            }
          });
        });
      },
    };
  }
