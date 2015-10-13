define(['../component-2.0.0/sample'], function(){
angular.module('admin', ['sample'])
  .config(angular.module('overmind').control())
  .config(function($routeProvider){
    $routeProvider.when('/admin', {controller: 'AdminCtrl', templateUrl: 'apps/admin/admin.html'})
    $routeProvider.when('/admin/settings', {controller: 'AdminSettingsCtrl', templateUrl: 'apps/admin/admin-settings.html'})
  })
  .controller('AdminSettingsCtrl', function($scope){
    console.log("admin settings ctrl");
  })
  .controller('AdminCtrl', ['$scope', 'sampleService', function($scope, sampleService){
    console.log("admin ctrl");    
    $scope.message = 'update settings';
    $scope.componentMessage = sampleService;
  }]);
})