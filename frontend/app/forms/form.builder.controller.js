angular
  .module('forms')
  .controller('FormBuilderController', FormBuilderController);

  FormBuilderController.$inject = ['$scope', 'FormService'];

  function FormBuilderController($scope, FormService) {
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
      url: '',
    };

    $scope.info = [];
    $scope.formName = '';

    $scope.addOption = function (option) {
      $scope.field.options = $scope._.uniq([...$scope.field.options, option]);
    };

    $scope.deleteItmes = function (arr, indexItem) {
      return arr.filter((element, index, array) => index !== indexItem);
    };

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

    $scope.submitData = function (data) {
      // do something :D do not worried about files c:
      console.log('data parent', data);
    };

    $scope.createForm = function () {
      const deepClone = $scope._.cloneDeep($scope.info);
      //console.log(deepClone);
      const formToCreate = {
        name: $scope.formName,
        builder: JSON.stringify(deepClone),
      };

      FormService.saveFormBuilder(formToCreate)
        .then((res) => {
          console.log('todo bien: D');
          console.log(res.data);
        })
        .catch((err) => {
          console.log('error :c');
        });
     // console.log(formToCreate);
    };
  }


