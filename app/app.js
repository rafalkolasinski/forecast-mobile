'use strict';
angular.module('forecastMobile', [
  'main',
  'LocalForageModule'
])

  //configuring localForage plugin
  .config(['$localForageProvider', function ($localForageProvider) {
    $localForageProvider.config({
      driver: 'localStorageWrapper',
      name: 'forecastMobile',
      version: 1.0,
      storeName: 'datamap',
      description: 'All of the app data needed for functionalities to work.'
    });
  }])

  .run(function ($rootScope, $ionicPlatform, $ionicPopup, $localForage) {
    var local = $localForage;

    $ionicPlatform.ready(function () {
      var networkState = '';
      var connected = false;

      //check on app launch if mobile device is connected to the internet
      //NOTE: this is not checked on desktop (no 'connection' field)
      if (navigator.connection) {
        networkState = navigator.connection.type;
      }

      if (networkState === '' || networkState === 'No network connection' || networkState === 'none') {
        connected = false;
      } else {
        connected = true;
      }

      //save connection state to localstorage
      local.setItem('connected', connected).then(function() {
        if(connected === false) {
          showConnectionAlert();
        }
      });
    });

    var showConnectionAlert = function() {
        var connectionAlertPopup = $ionicPopup.alert({
          title: 'Warning!',
          template: `<div class="text-center">Your device has no Internet connection.</div>`
        });

        connectionAlertPopup.then(function(res) {
          // console.log(res);
        });
    };
  });
