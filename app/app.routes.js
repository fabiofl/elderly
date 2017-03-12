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
				controller: 'DiaryController'
			});
			
		$locationProvider.html5Mode(true);

	});
})();