var App = angular.module("App", ['ngRoute']);

/* Setup App Main Controller */
App.controller('AppController', ['$scope', '$http', function ($scope, $http) {
   
}]);

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    
      when('/', {
        templateUrl: 'views/home/index.html',
        controller: 'HomeController'
      }).

      when('/about', {
        templateUrl: 'views/about/index.html'
      }).

      when('/validation-date', {
        controller: 'MultiInputsController',
        templateUrl: 'views/validation-date/index.html'
      }).

      when('/multi-inputs', {
        controller: 'MultiInputsController',
        templateUrl: 'views/multi-inputs/index.html'
      }).

      otherwise({
        redirectTo: '/'
      });
  }]);