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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
  });
