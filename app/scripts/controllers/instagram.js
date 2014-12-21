'use strict';

/**
 * @ngdoc function
 * @name playgorundApp.controller:InstagramCtrl
 * @description
 * # InstagramCtrl
 * Controller of the playgorundApp
 */
angular.module('playgroundApp')
  .controller('InstagramCtrl', ['$scope', 'instagram', 'uiGmapGoogleMapApi', '$window',
    function ($scope, instagram, uiGmapGoogleMapApi,$window) {
      $scope.pictures = [];
      $scope.markers = [];
      instagram.fetchLatest(function(data){
        $scope.pictures = data;

        for (var i = 0; i < $scope.pictures.length; i++) {
          var m = { latitude: $scope.pictures[i].location.latitude,
                    longitude: $scope.pictures[i].location.longitude,
                    id: $scope.pictures[i].caption.id};
          $scope.markers.push(m);
        }
      });

    uiGmapGoogleMapApi.then(function(maps) {

    });

    var $gmap = angular.element('.angular-google-map-container');
    var w = angular.element($window);
    $scope.pageHeight = w.height() - 50;
    $gmap.css('height', $scope.pageHeight + 'px');

    w.bind('resize', function () {
      $scope.pageHeight = w.height()-50;
    });

    $scope.map = { center: { latitude: 0, longitude: 0 }, zoom: 2 };

    $scope.picZoom = function(location){
      $scope.map.center.latitude = location.latitude;
      $scope.map.center.longitude = location.longitude;
      $scope.map.zoom = 15;
    };

    $scope.defaultZoom = function() {
      $scope.map.center.latitude = 0;
      $scope.map.center.longitude = 0;
      $scope.map.zoom = 2;
    };

  }]);
