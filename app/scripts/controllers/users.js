'user strict';

angular.module('sampleAppApp')
  .controller('UserCtrl', ['$scope', function ($scope) {
  	$scope.isFormSubmitted = false;
  	$scope.submitForm = function(form) {
  		$scope.isFormSubmitted = true;
  		console.log(form);
  		console.log($scope.user);
  	};


  }]);