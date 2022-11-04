angular
  .module('alexaApp')
  .factory('FormService', FormService);

  FormService.$inject = ['$http', 'config'];

  function FormService($http, config) {
    return {
      getFormBuilder: getFormBuilder,
      saveFormBuilder: saveFormBuilder,
    };

    function getFormBuilder(idBulder) {
      return $http
        .get(`${config.apiUrl}/api/forms/${idBulder}`)
        .then(getFormBuilderComplete)
        .catch(getFormBuilderFailed);

      function getFormBuilderComplete(response) {
        return response.data;
      }

      function getFormBuilderFailed(error) {
        //console.log('errror:');
        //console.error('XHR Failed for tables.' + error.message);
      }
    }

    function saveFormBuilder(data) {
      return $http({
        method: 'POST',
        url: `${config.apiUrl}/api/forms/builder`,
        data: data,
        headers: { 'Content-Type': 'application/json' },
      })
        .then(saveFormBuilderComplete)
        .catch(saveFormBuilderFailed);

      function saveFormBuilderComplete(response) {
        return response.data;
      }

      function saveFormBuilderFailed(error) {
        //console.log('errror:');
        //console.error('XHR Failed for tables.' + error.message);
      }
    }
  }
