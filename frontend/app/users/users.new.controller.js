angular
  .module('users')
  .controller('UserNewController', UserNewController);

  UserNewController.$inject = [
    '$scope',
    '$location',
    'datatableOptions',
    'modules',
    'FormsPrepared',
    'FormService',
  ];

  function UserNewController(
    $scope,
    $location,
    datatableOptions,
    modules,
    FormsPrepared,
    FormService,
  ) {
    $scope._ = _;

    $scope.data = FormsPrepared.data[0];
    $scope.builderId = $scope.data.ID;
    $scope.deepClone = $scope._.cloneDeep($scope.data);
    $scope.jsonParse = angular.fromJson($scope.deepClone.BUILDER);

    $scope.info = $scope.jsonParse;

    $scope.$on('formSubmitted', function (event, data) {
      data.append('TABLE', 'USERS');
      data.append('FORM_BUILDER_ID', $scope.builderId);

      FormService.saveFormData(data)
        .then((info) => {
          console.log('ssii', info);

          $.notify('Se ha guardado correctamente', 'success');
          $location.path('/users');
        })
        .catch((err) => {
          console.log('herror');
          $.notify('Ha occurrido un error con la carga de tablas', 'error');
        });
    });

  }
