(function(){
	angular.module('elderly.diary', [])

	.controller('DiaryController', ['$scope', "$firebaseObject", "$state",
		function($scope, $firebaseObject, $state){
			var ref = firebase.database().ref('diary');
	    	// var list = $firebaseArray(ref);
	    	var list = [];
	    	list.push($firebaseObject(ref));
	    // make the list available in the DOM
	    	$scope.list = list;

	    	$scope.getDiary = function(event){
	    		console.log("getDiary() in");
	    		$state.go('events');
	    	}
	}]);
})();