(function(){
	angular.module('elderly.routes', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'components/home/home.view.html',
			controller: 'HomeController'
		});
	});
})();