var angularApp = angular.module('DataLoader',['ui.router']);

angularApp.config(function($interpolateProvider,$httpProvider){
    //For IE Cache issue
    $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
});

/**
 *usersController
 *@input app
 */
angular.module("DataLoader")
    .controller('loginController',['$scope','$location','$rootScope',function($scope,$location,$rootScope) {
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
angular.module("DataLoader")
    .controller('dashboardsController',['$scope','$location','$rootScope','$state',function($scope,$location,$rootScope,$state) {
	
	$rootScope.isLoggedIn = true;
	$scope.logout = function(){
		$location.path('/login');
		$rootScope.isLoggedIn = false;
	};
	
	
	$rootScope.$state = $state;
}]);

angular.module("DataLoader")
    .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
	
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

angular.module("DataLoader")
    .run(function($rootScope) {
	$rootScope.isLoggedIn = false;
	$rootScope.isCollapsed = true;
});

	
