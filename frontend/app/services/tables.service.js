
angular
  .module('alexaApp')
  .factory('TablesService', TablesService);

  TablesService.$inject = ['$http', 'config'];

  function TablesService($http, config) {
    return {
      getTableBuilder: getTableBuilder,
      saveTableBuilder: saveTableBuilder,
    };

    function getTableBuilder() {
      return $http
        .get(`${config.apiUrl}/api/tables/fileds`)
        .then(getTableBuilderComplete)
        .catch(getTableBuilderFailed);

      function getTableBuilderComplete(response) {
        return response.data;
      }

      function getTableBuilderFailed(error) {
        //console.log('errror:');
        //console.error('XHR Failed for tables.' + error.message);
      }
    }

    function saveTableBuilder(data){
        return $http({
          method: 'POST',
          url: `${config.apiUrl}/api/tables/builder`,
          data: data,
          headers: { 'Content-Type': 'application/json' },
        })
          .then(saveTableBuilderComplete)
          .catch(saveTableBuilderFailed);

        function saveTableBuilderComplete(response) {
          return response.data;
        }

        function saveTableBuilderFailed(error) {
          //console.log('errror:');
          //console.error('XHR Failed for tables.' + error.message);
        }

    }
  }
