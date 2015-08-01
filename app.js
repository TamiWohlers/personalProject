var app = angular.module('hospiceProject', ['ngRoute'] );

app.config(function($routeProvider){
    $routeProvider.
      when('/home', {
        templateUrl: 'visitTemplate.html',
        controller: 'mainCtrl'
      }).
      //  when('/phones/assessment', {
      //   templateUrl: 'assessmentTemplate.html',
      //  controller: 'mainCtrl'
      // }).
      otherwise({
        redirectTo: '/home'
        });
  })


