'use strict';
angular.module('main')
.service('DesignSrvc', function () {
  this.getColoursPalette = function() {
    var colours = [
      {
        hex: '546BDE',
        rgb: '84, 107, 239',
        val: 430
      },
      {
        hex: '708CEA',
        rgb: '112, 140, 234',
        val: 486
      },
      {
        hex: '9ABAFA',
        rgb: '154, 186, 250',
        val: 590
      },
      {
        hex: 'BAD8FF',
        rgb: '186, 216, 255',
        val: 657
      },
      {
        hex: 'CFE3FC',
        rgb: '207, 227, 252',
        val: 686
      },
      {
        hex: 'E0E6EF',
        rgb: '224, 230, 239',
        val: 693
      },
      {
        hex: 'ECE6D8',
        rgb: '236, 230, 216',
        val: 382
      },
      {
        hex: 'F8E6B5',
        rgb: '248, 230, 181',
        val: 659
      },
      {
        hex: 'FFDE86',
        rgb: '255, 222, 134',
        val: 611
      },
      {
        hex: 'F7B65E',
        rgb: '237, 182, 94',
        val: 523
      },
      {
        hex: 'DD723C',
        rgb: '221, 114, 60',
        val: 395
      },
      {
        hex: 'C83D26',
        rgb: '200, 61, 38',
        val: 299
      }
    ];

    return colours;
  }
});
