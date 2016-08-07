'use strict';
angular.module('main')
.service('GeolocationSrvc', function ($http, $q) {
  this.getLocationData = function() {
    var def = $q.defer();
    var data = {};

    //commented for testing purposes

    // navigator.geolocation.getCurrentPosition(
    //   function(res) {
    //     data = {
    //       lat: res.coords.latitude,
    //       lon: res.coords.longitude
    //     }

    //     def.resolve(data);
    //   },
    //   function(err) {
    //     def.reject('Couldn\'t get coordinates.', err);
    //   }
    // );

    //mock for testing purposes wo/ Cordova in browser
    data = {
      lat: 50.219602, lon: 19.337119
    };
    def.resolve(data);

    return def.promise;
  }
});
