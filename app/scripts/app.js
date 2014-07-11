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
      .when('/help', {
        templateUrl: 'views/static_pages/help.html',
        controller: 'MainCtrl',
        title: 'Help'
      })
      .when('/contact', {
        templateUrl: 'views/static_pages/contact.html',
        controller: 'MainCtrl',
        title: 'Contact'
      })
      .when('/signup', {
        templateUrl: 'views/users/new.html',
        controller: 'UserCtrl',
        title: 'Sign up'
      })
  		.otherwise( { redirectTo: '/' });

  	$locationProvider.html5Mode(true).hashPrefix('!');
  }])
  .run(['$rootScope', function($rootScope) {
  	$rootScope.$on('$routeChangeSuccess', function(event, currentRoute) {
  		$rootScope.titleExtension = currentRoute.title ? '| ' + currentRoute.title : '';
  	});
  }]);
