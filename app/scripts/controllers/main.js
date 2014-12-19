'use strict';

/**
 * @ngdoc function
 * @name playgorundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playgorundApp
 */
angular.module('playgroundApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
