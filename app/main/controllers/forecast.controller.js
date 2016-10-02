'use strict';
angular.module('main')
.controller('ForecastCtrl', function ($scope, $q, $localForage, ForecastSrvc, GeolocationSrvc) {
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
						console.log($scope.forecast);
					}, function(err) {
						console.log(err);
					});
				}, function(err) {
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
			console.log('Didn\'t get any weather data from service.');
		})
	}

	$scope.init();
});
