angular
  .module('forms')
  .controller('FormBuilderController', FormBuilderController);

    FormBuilderController.$inject = ['$scope'];

    function FormBuilderController($scope) {
      $scope._ = _;
      $scope.option = '';
      $scope.builder = true;
      $scope.field = {
        name: '',
        dbfield: '',
        type: '',
        required: false,
        rules: '',
        options: [],
        value: '',
        url: ''
      };

      $scope.info = [];

      $scope.addOption = function (option) {
        $scope.field.options = $scope._.uniq([...$scope.field.options, option]);
      };

      $scope.deleteItmes = function (arr, indexItem) {
        return arr.filter((element, index, array) => index !== indexItem);
      }

      $scope.deleteField = function (index) {
        const infoClone = [...$scope.info];
        $scope.info = $scope.deleteItmes($scope.info, index);
      };

      $scope.deleteOption = function (indexToDelete) {
        $scope.field.options = $scope.field.options.filter(
          (element, index, array) => index !== indexToDelete,
        );
      };

      $scope.submit = function (e) {
        e.preventDefault();

        $scope.field.name && $scope.field.type;
        var newField = $scope._.cloneDeep($scope.field);
        var data = [...$scope.info, newField];
        $scope.info = $scope._.uniqBy(data, (e) => e.dbfield);
      };

      $scope.changeType = function () {
        if ($scope.field !== 'select' || $scope.field !== 'options') {
          $scope.field.options = [];
        }
      };
    }


