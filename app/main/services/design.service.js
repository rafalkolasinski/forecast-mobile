'use strict';
angular.module('main')
.service('DesignSrvc', function () {
  var gradient = {
    primary: {},
    secondary: {}
  };

  var colours = [
    {
      id: "00",
      hex: '190B2D',
      rgb: '11, 45, 45',
      val: 81
    },
    {
      id: "01",
      hex: '1B3581',
      rgb: '27, 53, 129',
      val: 209
    },
    {
      id: "02",
      hex: '469FED',
      rgb: '70, 159, 237',
      val: 466
    },
    {
      id: "03",
      hex: '85D0F8',
      rgb: '133, 208, 248',
      val: 589
    },
    {
      id: "04",
      hex: 'C6E2DC',
      rgb: '198, 226, 220',
      val: 644
    },
    {
      id: "05",
      hex: 'FCEACC',
      rgb: '252, 234, 204',
      val: 690
    },
    {
      id: "06",
      hex: 'F69656',
      rgb: '246, 150, 86',
      val: 482
    },
    {
      id: "07",
      hex: 'F45342',
      rgb: '244, 83, 66',
      val: 393
    },
    {
      id: "08",
      hex: 'D11A3F',
      rgb: '209, 26, 63',
      val: 298
    },
    {
      id: "09",
      hex: '770335',
      rgb: '119, 3, 53',
      val: 175
    },
    {
      id: "10",
      hex: '34032E',
      rgb: '52, 3, 46',
      val: 101
    },
    {
      id: "11",
      hex: '180B2D',
      rgb: '24, 11, 45',
      val: 80
    }
  ];

  this.getColoursPalette = function() {
    return colours;
  },

  this.setGradientValues = function(top, bottom) {
    gradient.primary = colours[top];
    gradient.secondary = colours[bottom];
  },

  this.getGradientValues = function() {
    return gradient;
  }

  this.setThemeCSS = function () {
    var forecastContainer = angular.element(document.querySelector("#forecast-main"));
    var forecastDetailsContainer = angular.element(document.querySelector("#forecast-details"));
    forecastContainer.css("background", "linear-gradient(to bottom, #" + gradient.primary.hex + " 0%, #" + gradient.secondary.hex + " 100%)");
    forecastDetailsContainer.css("background", "#" + gradient.secondary.hex);
    forecastDetailsContainer.css("border-top", "1px solid #" + gradient.primary.hex);
  }
});
