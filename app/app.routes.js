(function(){
	angular.module('elderly.routes', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider, $locationProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'components/home/home.view.html',
				controller: 'HomeController'
			});
			
		$locationProvider.html5Mode(true);

	});
})();