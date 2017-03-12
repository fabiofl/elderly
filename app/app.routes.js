(function(){
	angular.module('elderly.routes', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'components/home/home.view.html',
				controller: 'HomeController'
			})
			.state('diary', {
				url: '/diary',
				templateUrl: 'components/diary/diary.view.html',
				controller: 'DiaryController',
				data : {
					authenticate: true
				}
			})
			.state('addEvent', {
				url: '/addEvent',
				templateUrl: 'components/event/eventForm.view.html',
				controller: 'EventController',
				data : {
					authenticate: true
				}
			})
			
		$locationProvider.html5Mode(true);

	})
	.run(function ($rootScope, $state, Auth) {
		
	    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, error) {
	        // We can catch the error thrown when the $requireSignIn promise is rejected
	        // and redirect the user back to the home page

	        Auth.$requireSignIn().catch(function() {
	          if (toState.data && toState.data.authenticate === true) {
	          	$state.go('home');
	          }
	        });
	      });
	});
})();