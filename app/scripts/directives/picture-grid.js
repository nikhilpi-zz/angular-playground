'use strict';

/**
 * @ngdoc directive
 * @name playgroundApp.directive:pictureGrid
 * @description
 * # pictureGrid
 */
angular.module('playgroundApp')
  .directive('pictureGrid', ['$window', function ($window) {
    return {
      templateUrl:'/views/picture-grid.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  }]);
