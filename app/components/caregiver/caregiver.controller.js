(function(){
	angular.module('elderly.caregiver', [])

	.controller('CaregiverController', ['$scope', '$firebaseArray', '$state',
		function($scope, $firebaseArray, $state){
			var ref = firebase.database().ref('caregivers');
			$scope.caregivers = $firebaseArray(ref);
	}]);

})();