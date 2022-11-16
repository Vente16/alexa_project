  angular
  .module('alexaApp')
  .factory('AuthService', AuthService);

  AuthService.$inject = ['$http', '$location', 'jwtHelper', 'config'];

  function AuthService($http, $location, jwtHelper, config) {
    return {
      checkToken: checkToken,
      login: login,
      logout: logout,
      getDataToken: getDataToken,
    };

    function checkToken() {
      return localStorage.getItem('token');
    }

    function getDataToken(){
       return jwtHelper.decodeToken(localStorage.getItem('token'));
    }

    function logout() {
      localStorage.removeItem('token');
      $location.path('/login');
      $location.replace();
    }

    function login(data) {
      return $http({
        method: 'POST',
        url: `${config.apiUrl}/api/users/login`,
        data: data,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(loginComplete)
        .catch(loginFailed);

      function loginComplete(response) {
        return response.data;
      }

      function loginFailed(error) {
        //console.log('errror:');
        //console.error('XHR Failed for tables.' + error.message);
      }
    }
  }
