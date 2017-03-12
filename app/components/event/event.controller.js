(function(){
	angular.module('elderly.event', [])

	.controller('EventController', ['$scope', '$firebaseArray', '$firebaseObject', '$state',
		function($scope, $firebaseArray, $firebaseObject, $state){
			var ref = firebase.database().ref('events');
			var events = $firebaseArray(ref.orderByChild('datetime'));
			// events.reverse()

	    	$scope.events = events;
            $scope.event = null;
			$scope.newEvent = {};
			$scope.isOpen = false;

            if($state.is('saveEvent')) {
                var eventRef = firebase.database().ref('events/'+$state.params.id);
                eventRef.on('value', function(snap) {
                    $scope.event = snap.val()
                })
            }

			$scope.eventNew = function() {
				$state.go('addEvent');
			}

			$scope.goCaregivers = function() {
				$state.go('caregiver');
			}
			
            $scope.eventRead = function(event) {
                $scope.event = event;
				$state.go('saveEvent', {
                    id: event.$id
                });
			}

	    	$scope.addEvent = function() {

	    		ref.push().set($scope.newEvent).then(function(){
	    			$state.go('events');
	    		});

	    	}

            $scope.saveEvent = function() {

	    		ref.push().set($scope.event).then(function(){
	    			$state.go('events');
	    		});

	    	}
	}]);

})();
