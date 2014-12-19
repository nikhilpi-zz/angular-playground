'use strict';

/**
 * @ngdoc function
 * @name playgroundApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the playgroundApp
 */
angular.module('playgroundApp')
  .controller('HeaderCtrl', ['$location', 
    function ($scope,$location) {
      $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
      };
  }]);
