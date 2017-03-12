(function(){
	angular.module('elderly.home', [])

	.controller('HomeController', function($scope, $firebaseAuth, $state){
		$scope.login = function() {
			var auth = $firebaseAuth();

			// login with Facebook
			auth.$signInWithPopup("facebook").then(function(firebaseUser) {
			console.log("Signed in as:", firebaseUser.uid);
			$state.go('diary');
			}).catch(function(error) {
			console.log("Authentication failed:", error);
			});
		}
		
	});
})();