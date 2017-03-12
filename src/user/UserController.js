angular.module('eldery.user')
	.controller('UserController', ['$scope', 'User', '$firebaseObject', 
		function($scope, User, $firebaseObject) {
			$scope.login = function () {
				  var ref = firebase.database().ref('user');
				  // download the data into a local object
				  $scope.data = $firebaseObject(ref);

			}
	}]);
