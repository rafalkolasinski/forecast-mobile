'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/forecast.html',
            controller: 'ForecastCtrl as ctrl'
          }
        }
      })
      // .state('main.listDetail', {
      //   url: '/list/detail',
      //   views: {
      //     'pageContent': {
      //       templateUrl: 'main/templates/list-detail.html',
      //       // controller: '<someCtrl> as ctrl'
      //     }
      //   }
      // })
      .state('main.search', {
        url: '/search',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/search.html',
            controller: 'SearchCtrl as ctrl'
          }
        }
      })
      .state('main.settings', {
        url: '/settings',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/settings.html',
            controller: 'SettingsCtrl as ctrl'
          }
        }
      });
});
