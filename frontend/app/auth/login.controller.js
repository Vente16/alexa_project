angular
  .module('auth')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope', '$location', 'AuthService'];

  function LoginController($scope, $location, AuthService) {
    $scope._ = _;

    $scope.loading = false;

    $scope.isValidUser = true;

    $scope.formData = {
      email: '',
      password: '',
    };

    $scope.isLoading = false;

    $scope.focusInput = function ($event) {
      let parent = angular.element($event.target).parent();
      let label = angular.element(parent).find('label');
      label.removeClass('label-login-blur');
      label.addClass('label-login-focus');
    };

    $scope.blurInput = function ($event) {
      let parent = angular.element($event.target).parent();
      let label = angular.element(parent).find('label');
      label.addClass('label-login-blur');
    };

    $scope.changeInput = function () {
      $scope.isValidUser = true;
    };

    $scope.submit = function ($event) {
      $event.preventDefault();
      $scope.isLoading = true;
      AuthService.login($scope.formData)
        .then((res) => {
          $scope.isValidUser = res.exits;
          if (res.exits) {
            localStorage.setItem('token', res.token);
            $location.path('/');
          }
        })
        .catch((err) => {
          console.log('error');
        })
        .finally(() => {
          $scope.isLoading = false;
        });
    };
  }
