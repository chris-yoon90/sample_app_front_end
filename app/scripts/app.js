'use strict';

/**
 * @ngdoc overview
 * @name sampleAppApp
 * @description
 * # sampleAppApp
 *
 * Main module of the application.
 */
angular
  .module('sampleAppApp', ['ngRoute'])
  .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  	$routeProvider
  		.when('/', {
  			templateUrl: 'views/static_pages/home.html',
  			controller: 'MainCtrl'
  			})
  		.when('/about', {
  			templateUrl: 'views/static_pages/about.html',
  			controller: 'MainCtrl',
  			title: 'About'
  		})
  		.otherwise( { redirectTo: '/' });

  	$locationProvider.html5Mode(true);
  }])
  .run(['$rootScope', function($rootScope) {
  	$rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute) {
  		$rootScope.titleExtension = currentRoute.title ? "| " + currentRoute.title : "";
  	});
  }]);
