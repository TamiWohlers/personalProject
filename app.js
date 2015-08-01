var app = angular.module('hospiceProject', ['ngRoute'] );

app.config(function($routeProvider){
    $routeProvider.
      when('/home', {
        templateUrl: 'visitTemplate.html',
        controller: 'mainCtrl'
      }).
      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      otherwise({
        redirectTo: '/home'
        });
  })


