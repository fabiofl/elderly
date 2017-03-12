(function(){
	angular.module('elderly.diary', [])

	.controller('DiaryController', ['$scope', "$firebaseArray", function($scope, $firebaseArray){
		var ref = firebase.database().ref('events');
    	var list = $firebaseArray(ref);

    // make the list available in the DOM
    	$scope.list = list;
	}]);
})();