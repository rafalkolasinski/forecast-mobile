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
      lat: 19.91667, lon: 50.083328
    };
    def.resolve(data);

    return def.promise;
  }
});
