(function(){
	angular.module('elderly.event', [])

	.controller('EventController', ['$scope', '$firebaseArray', function($scope, $firebaseArray, $state){
		var ref = firebase.database().ref('events');
		var events = $firebaseArray(ref);

		$scope.newEvent = {};

    	$scope.addEvent = function() {
    		
    		ref.push().set($scope.newEvent)
    		
    	}
	}]);
})();