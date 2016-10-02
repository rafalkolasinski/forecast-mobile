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

  .run(function ($rootScope, $ionicPlatform, $ionicPopup, $localForage, DesignSrvc) {
    var local = $localForage;

    $ionicPlatform.ready(function () {
      var networkState = '';
      var connected = false;
      $rootScope.time = moment();
      setThemeColours();
      DesignSrvc.setThemeCSS();

      //check on app launch if mobile device is connected to the internet
      //NOTE: this is not checked on desktop (no 'connection' field)
      if(navigator.connection) {
        networkState = navigator.connection.type;
      }

      if(networkState === '' || networkState === 'No network connection' || networkState === 'none') {
        connected = false;
      } else {
        connected = true;
      }

      //DEV: MOCK THE CONNECTION
      connected = true;

      var showConnectionAlert = function() {
        var connectionAlertPopup = $ionicPopup.alert({
          title: 'Warning!',
          template: '<div class="text-center">Your device has no Internet connection.</div>'
        });

        connectionAlertPopup.then(function(res) {
          console.log(res);
        });
      };

      //save connection state to localstorage
      local.setItem('connected', connected).then(function() {
        if(connected === false) {
          showConnectionAlert();
        }
      });
    });

    var setThemeColours = function() {
      var primaryIndex = 0;
      var secondaryIndex = 0;

      if($rootScope.time) {
        /*
         var timeFormat = checkTimeFormat();
         if(timeFormat === '12') {

         } else if(timeFormat === '24') {

         }
         */

        if($rootScope.time.format("HH") === "00") {
          $rootScope.time.subtract(1, "hours");
        }
        primaryIndex = Math.floor(parseInt($rootScope.time.format("HH"))/2);
        if(primaryIndex === 12) {
          secondaryIndex = 0;
        } else {
          secondaryIndex = primaryIndex+1;
        }
        DesignSrvc.setGradientValues(primaryIndex, secondaryIndex);
      }
    };

    /*
     * commented for now as supposedly moment gives time in 12h format
     * using format("HH")
     *
     * var checkTimeFormat = function() {
     *  var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
     *  var dateString = date.toLocaleTimeString();
     *
     *  if(dateString.match(/am|pm/i) || date.toString().match(/am|pm/i) ) {
     *    return "12";
     *  } else {
     *    return "24";
     *  }
     * }
    */
  });
