'use strict';
angular.module('main')
.service('ForecastSrvc', function ($http, $q) {
  this.getWeatherData = function(gpsData) {
    var def = $q.defer();
    var lat = gpsData.lat;
    var lon = gpsData.lon;
    var data = {};

    //@TODO: replace APPID w/ custom one OR ask for APPID on login screen

    $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=f27f595bba1e109332cf3589b95e1973'
    })
    .then(function(res) {
        data = res;
        def.resolve(data);
      }, function(err) {
        def.reject('Couldn\'t get forecast from API.', err);
    })

    return def.promise;
  }
});
