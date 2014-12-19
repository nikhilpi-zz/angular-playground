'use strict';

/**
 * @ngdoc service
 * @name playgroundApp.instagram
 * @description
 * # instagram
 * Factory in the playgroundApp.
 */
angular.module('playgroundApp')
  .factory('instagram', ['$http', function ($http) {
    return {
      fetchLatest: function(cb){
        var endPoint = 'https://api.instagram.com/v1/users/1602599097/media/recent/?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK';

        $http.jsonp(endPoint).success(function(response) {
          cb(response.data);
        });
      }
    };
  }]);
