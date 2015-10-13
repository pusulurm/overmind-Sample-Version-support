define(['../component-1.0.0/sample'], function(){
	angular.module('home', ['sample'])
  .config(angular.module('overmind').control())
  .config(function($routeProvider){
    $routeProvider.when('/', {controller: 'HomeCtrl', templateUrl: 'apps/home/home.html'})
  })
  .controller('HomeCtrl', ['$scope', 'sampleService', function($scope, sampleService){
    console.log("home ctrl");
    $scope.componentMessage = sampleService;    
  }])
})

