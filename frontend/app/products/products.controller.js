angular
  .module('products')
  .controller('ProductosController', ProductosController);

   ProductosController.$inject = [
     '$scope',
     '$location',
     'datatableOptions',
     'modules',
     'FormsPrepared',
     'FormService',
   ];

  function ProductosController(
    $scope,
    $location,
    datatableOptions,
    modules,
    FormsPrepared,
    FormService,
  ) {
    $scope._ = _;
    /*$scope.testValues = function (info) {
       return info.map((e) => ({ ...e, value: 'john' }));

    }; */
    $scope.data = FormsPrepared.data[0];
    $scope.builderId = $scope.data.ID;
    $scope.deepClone = $scope._.cloneDeep($scope.data);
    $scope.jsonParse = JSON.parse($scope.deepClone.BUILDER);
    $scope.info = $scope.jsonParse;
    console.log($scope.data);
    //$scope.info = $scope.testValues($scope.jsonParse);
    //$scope.dataTableConfig = datatableOptions;

    /*$scope.submitData = function(data) {
        console.log('holaa!');
    }; */

    $scope.$on('formSubmitted', function (event, data) {

      data.append('TABLE', 'PRODUCTS');
      data.append('FORM_BUILDER_ID', $scope.builderId);
      //console.log('info jejej', date);
      //$eve.preventDefault();
      FormService.saveFormData(data)
        .then((info) => {
          console.log('ssii', info);

           $.notify('Se ha guardado correctamente', 'success');
        })
        .catch((err) => {
          console.log('herror');
           $.notify('Ha occurrido un error con la carga de tablas', 'error');
        });

    });

    /*const filterPath = (el) => el.path === $location.path();
    $scope.myModule = [...modules].filter(filterPath)[0]; */

    //$scope.dataTableInfo = TablesPrepService.data;
  }
