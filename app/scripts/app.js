'use strict';

/**
 * @ngdoc overview
 * @name angularFinalApp
 * @description
 * # angularFinalApp
 *
 * Main module of the application.
 
angular
  .module('angularFinalApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
*/


angular.module('PhonecatApp', [
    'ngRoute',
    'PhonecatAnimations',
    'PhonecatControllers',
    'PhonecatFilters',
    'PhonecatServices'
  ])
.config(['$routeProvider',function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/phoneList.html',
    controller: 'PhoneListCtrl'
  })
  .when('/phones/:phoneId', {
    templateUrl: 'views/phoneDetail.html',
    controller: 'PhoneDetailCtrl'
  })
  .otherwise({ redirectTo: '/' })
}])