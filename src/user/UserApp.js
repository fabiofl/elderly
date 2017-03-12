angular.module('eldery.user', [])
	.config(['$stateProvider', function($stateProvider) {
		$stateProvider
			.state('user', {
				url: '',
				abstract: true,
				controller: 'UserController'
			})
			.state('user.login', {
				url: '/login',
				templateUrl: '/src/user/login.html',
			})
	}])