angular
  .module('users')
  .controller('UsersEditController', UsersEditController);

  UsersEditController.$inject = [
    '$scope',
    '$location',
    'FormsPrepared',
    'FormService',
  ];

  function UsersEditController(
    $scope,
    $location,
    FormsPrepared,
    FormService,
  ) {
    $scope._ = _;

    $scope.data = FormsPrepared ? FormsPrepared.data[0]: [];

    if (!$scope.data) {
      $location.path('/users');
      return
    }

    $scope.builderId = $scope.data.FORM_BUILDER_ID || null;
    $scope.deepClone = $scope._.cloneDeep($scope.data) || {};
    $scope.id = $scope.data.ID;
    $scope.jsonParse = JSON.parse($scope.deepClone.BUILDER || []);
    $scope.dataUpdated = $scope.jsonParse.reduce((prev, current) => {
      if (current.dbfield in $scope.deepClone) {
        return [
          ...prev,
          {
            ...current,
            value: $scope.deepClone[current.dbfield],
          },
        ];
      }
    }, []);

    $scope.info = $scope.dataUpdated;

    $scope.$on('formSubmitted', function (event, data) {
      data.append('TABLE', 'USERS');
      data.append('FORM_BUILDER_ID', $scope.builderId);
      data.append('ID', $scope.id);

      FormService.updateFormData(data)
        .then((info) => {
          $.notify('Se ha actualizado correctamente', 'success');
          $location.path('/users');
        })
        .catch((err) => {
          console.log('herror');
          $.notify('Ha occurrido un error con la carga de tablas', 'error');
        });
    });

    $scope.ngFormSubmit = function (info) {
    };


  }
