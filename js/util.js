'use strict';

(function () {
  window.util = {
    getRandomNumber: function (min, max) {
      return min + Math.random() * (max - min);
    },

    getRandomBlueSaturate: function () {
      var saturate = window.util.getRandomNumber(0, 100);
      return 'hsl(240,' + saturate + '%,50%)';
    },

    getRandomIndex: function (arrayLength) {
      return Math.floor(Math.random() * arrayLength);
    },

    getRandomFullName: function (names, surnames) {
      return names[window.util.getRandomIndex(names.length)] + ' ' + surnames[window.util.getRandomIndex(surnames.length)];
    },
  };
})();
