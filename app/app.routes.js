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
			.state('events', {
				url: '/events',
				templateUrl: 'components/event/events.view.html',
				controller: 'EventController',
				data : {
					authenticate: true
				}
			})
			.state('addEvent', {
				url: '/addEvent',
				templateUrl: 'components/event/event.add.html',
				controller: 'EventController',
				data : {
					authenticate: true
				}
			})
            .state('saveEvent', {
				url: '/saveEvent/:id',
				templateUrl: 'components/event/event.add.html',
				controller: 'EventController',
				data : {
					authenticate: true
				}
			})
			.state('caregiver', {
				url: '/caregivers',
				templateUrl: 'components/caregiver/caregiver.view.html',
				controller: 'CaregiverController',
				data : {
					authenticate: true
				}
			})
			.state('caregiver.detail', {
				url: '/caregivers/{id}',
				templateUrl: 'components/caregiver/caregiver.detail.html',
				controller: 'CaregiverController',
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
