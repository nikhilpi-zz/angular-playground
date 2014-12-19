'use strict';

/**
 * @ngdoc overview
 * @name playgr0undApp
 * @description
 * # playgroundApp
 *
 * Main module of the application.
 */
angular
  .module('playgroundApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/instagram', {
        templateUrl: 'views/instagram.html',
        controller: 'InstagramCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCbzgxWTcnqDAQPdhsFKP2WP5cZ23ZUDpo',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  });
