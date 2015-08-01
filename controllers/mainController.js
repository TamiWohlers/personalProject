var app = angular.module('hospiceProject' );

  app.controller('mainCtrl', function($scope, peopleService) {
    $scope.working = 'working'
    $scope.patientData = peopleService.patientData;

	$scope.mileageCalc = function(miles) {
		$scope.calcPayment = peopleService.mileageCalc(miles);
	};
	$scope.isOnVisitList = function(patientName) {
		$scope.patientName = peopleService.isOnVisitList(patientName)
		console.log("on scope", $scope.patientName);
	}
});
  

