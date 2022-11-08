angular
  .module('products')
  .controller('ProductEditController', ProductEditController);

  ProductEditController.$inject = [
    '$scope',
    '$location',
    'datatableOptions',
    'modules',
    'FormsPrepared',
    '$routeParams',
    'FormService',
  ];

  function ProductEditController(
    $scope,
    $location,
    datatableOptions,
    modules,
    FormsPrepared,
    $routeParams,
    FormService,
  ) {
    $scope._ = _;
    console.log(FormsPrepared);
    /*$scope.testValues = function (info) {
        return info.map((e) => ({ ...e, value: 'john' }));

        }; */
    $scope.data = FormsPrepared.data[0] || [];
    $scope.builderId = $scope.data.FORM_BUILDER_ID || null;
    $scope.deepClone = $scope._.cloneDeep($scope.data) || {};
    $scope.id = $scope.data.ID;
    //console.log('editable:', $scope.data);
    $scope.jsonParse = JSON.parse($scope.deepClone.BUILDER || '[]');
    console.log('parse:', $scope.jsonParse);
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
    //$scope.info = $scope.jsonParse;
    //console.log($scope.data);
    //$scope.info = $scope.testValues($scope.jsonParse);
    //$scope.dataTableConfig = datatableOptions;

    /*$scope.submitData = function(data) {
            console.log('holaa!');
        }; */

    $scope.$on('formSubmitted', function (event, data) {
      data.append('TABLE', 'PRODUCTS');
      data.append('FORM_BUILDER_ID', $scope.builderId);
      data.append('ID', $scope.id);
      console.log('info to save: ', data);
      //$eve.preventDefault();
      FormService.updateFormData(data)
        .then((info) => {
          console.log('ssii', info);

          $.notify('Se ha guardado correctamente', 'success');
        })
        .catch((err) => {
          console.log('herror');
          $.notify('Ha occurrido un error con la carga de tablas', 'error');
        });
      //save.append('TABLE', 'PRODUCS');

      //.log('cloned data: ', data);
    });

    $scope.ngFormSubmit = function (info) {
      console.log('heeyy', info);
    };

    /*const filterPath = (el) => el.path === $location.path();
        $scope.myModule = [...modules].filter(filterPath)[0]; */

    //$scope.dataTableInfo = TablesPrepService.data;
  }
