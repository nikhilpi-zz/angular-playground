'use strict';

/**
 * @ngdoc directive
 * @name playgroundApp.directive:pictureGrid
 * @description
 * # pictureGrid
 */
angular.module('playgroundApp')
  .directive('pictureGrid', function () {
    return {
      templateUrl:'/views/picture-grid.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
