'use strict';

/**
 * @ngdoc function
 * @name playgorundApp.controller:InstagramCtrl
 * @description
 * # InstagramCtrl
 * Controller of the playgorundApp
 */
angular.module('playgroundApp')
  .controller('InstagramCtrl', ['$scope', 'instagram',
    function ($scope, instagram) {
      $scope.pictures = [];
      instagram.fetchLatest(function(data){
        $scope.pictures = data;
      });
  }]);
