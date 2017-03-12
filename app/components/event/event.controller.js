(function(){
	angular.module('elderly.event', [])

	.controller('EventController', ['$scope', '$firebaseArray', '$state',
		function($scope, $firebaseArray, $state){
			var ref = firebase.database().ref('events');
			var events = $firebaseArray(ref.orderByChild('datetime'));
			// events.reverse()

	    	$scope.events = events;
			$scope.newEvent = {};
			$scope.isOpen = false;

			$scope.eventNew = function() {
				$state.go('addEvent');
			}

			$scope.goCaregivers = function() {
				$state.go('caregiver');
			}

	    	$scope.addEvent = function() {
	    		
	    		ref.push().set($scope.newEvent).then(function(){
	    			$state.go('events');
	    		});
	    		
	    	}
	}]);

})();