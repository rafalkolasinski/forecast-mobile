'use strict';
angular.module('main')
.controller('ForecastCtrl', function ($rootScope, $scope, $q, $localForage, ForecastSrvc, GeolocationSrvc) {
	$scope.connected = false;
	$scope.forecast = {};
	var def = $q.defer();

	// $scope.coordinates = {};
	//DEV: MOCKED THE COORDS
	var coordinates = {lat: 50.083328, lon: 19.91667};

	var local = $localForage;

	$scope.init = function() {
		$scope.checkConnection();
	}

	$scope.checkConnection = function() {
	  $rootScope.showLoader();

		local.getItem('connected')
		.then(function(data){
			$scope.connected = data;
		})
		.then(function() {
			if($scope.connected === true) {
				GeolocationSrvc.getLocationData()
				.then(function(coords) {
					ForecastSrvc.getWeatherData(coordinates)
					.then(function(data) {
						$scope.forecast = data.data;
            $rootScope.hideLoader();
						console.log($scope.forecast);
					}, function(err) {
            $rootScope.hideLoader();
						console.log(err);
					});
				}, function(err) {
          $rootScope.hideLoader();
					console.log(err);
				});
			}
		})
	}

	$scope.getForecast = function(coords) {
		var coordinates = coords;
		ForecastSrvc.getWeatherData(coordinates)
		.then(function(data) {
			$scope.forecast = data;
		}, function(err) {
      $rootScope.hideLoader();
			console.log('Didn\'t get any weather data from service.');
		})
	}

	$scope.init();
});
