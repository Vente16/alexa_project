angular
  .module('products')
  .controller('ProductosController', ProductosController);

   ProductosController.$inject = [
     '$scope',
     '$location',
     'datatableOptions',
     'modules',
     'FormsPrepared',
   ];

  function ProductosController(
    $scope,
    $location,
    datatableOptions,
    modules,
    FormsPrepared,
  ) {
    $scope._ = _;
    $scope.data = FormsPrepared.data[0];
    $scope.deepClone = $scope._.cloneDeep($scope.data);
    $scope.info = JSON.parse($scope.deepClone.BUILDER);
    console.log('hello: ', $scope.info);
    //$scope.dataTableConfig = datatableOptions;

    /*$scope.submitData = function(data) {
        console.log('holaa!');
    }; */

    $scope.$on('formSubmitted', function($eve, data){
        console.log('submitedd :D');
        console.log('my data: ', data);
    });

    $scope.ngFormSubmit = function (info) {
      console.log('heeyy', info);
    };
    /*const filterPath = (el) => el.path === $location.path();
    $scope.myModule = [...modules].filter(filterPath)[0]; */

    //$scope.dataTableInfo = TablesPrepService.data;
  }
