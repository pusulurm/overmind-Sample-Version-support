angular.module('sample', [])
  .config(angular.module('overmind').control())  
  .factory('sampleService', function(){
    return "Krishna";
  });
