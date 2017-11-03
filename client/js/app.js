var app = angular.module('sampleApp',['ui.router']);

/**
 *usersController
 *@input app
 */
app.controller('loginController',['$scope','$location','$rootScope',function($scope,$location,$rootScope) {
	$rootScope.isLoggedIn = false;
	$scope.submitForm = function(){
		$location.path('/home');
		$rootScope.isLoggedIn = true;
	};

}]);



/**
 *dashboardController
 *@input app
 */
app.controller('dashboardsController',['$scope','$location','$rootScope','$state',function($scope,$location,$rootScope,$state) {
	
	$rootScope.isLoggedIn = true;
	$scope.logout = function(){
		$location.path('/login');
		$rootScope.isLoggedIn = false;
	};
	
	
	$rootScope.$state = $state;
}]);




app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
	
		$urlRouterProvider.otherwise('/login');
		$locationProvider.html5Mode(false).hashPrefix('!');
	
		$stateProvider
	
			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html',
				controller:'dashboardsController'
			})
	
			.state('login', {
				url:'/login',
				templateUrl:'views/login.html',
				controller:'loginController'  
			})
			.state('about', {
				url:'/about',
				templateUrl:'views/about.html',
				controller:'dashboardsController'  
			})
			.state('contact', {
				url:'/contact',
				templateUrl:'views/contact.html',
				controller:'dashboardsController'  
			})
	
	});


app.run(function($rootScope) {
	$rootScope.isLoggedIn = false;
	$rootScope.isCollapsed = true;
});

	
