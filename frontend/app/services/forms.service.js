angular
  .module('alexaApp')
  .factory('FormService', FormService);

  FormService.$inject = ['$http', 'config'];

  function FormService($http, config) {
    return {
      getFormBuilder: getFormBuilder,
      saveFormBuilder: saveFormBuilder,
      saveFormData: saveFormData,
      getFormData: getFormData,
      updateFormData: updateFormData,
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

    function getFormData(id, table) {
      return $http
        .get(`${config.apiUrl}/api/formsData/${id}/${table}`)
        .then(getFormDataComplete)
        .catch(getFormDataFailed);

      function getFormDataComplete(response) {
        return response.data;
      }

      function getFormDataFailed(error) {
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

    function saveFormData(data) {
      return $http({
        method: 'POST',
        url: `${config.apiUrl}/api/forms/saveData`,
        data: data,
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined,
        },
      })
        .then(saveFormDataComplete)
        .catch(saveFormDataFailed);

      function saveFormDataComplete(response) {
        return response.data;
      }

      function saveFormDataFailed(error) {
        //console.log('errror:');
        //console.error('XHR Failed for tables.' + error.message);
      }
    }

    function updateFormData(data) {
      return $http({
        method: 'POST',
        url: `${config.apiUrl}/api/forms/update`,
        data: data,
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined,
        },
      })
        .then(updateFormDataComplete)
        .catch(updateFormDataFailed);

      function updateFormDataComplete(response) {
        return response.data;
      }

      function updateFormDataFailed(error) {
        //console.log('errror:');
        //console.error('XHR Failed for tables.' + error.message);
      }
    }
  }
