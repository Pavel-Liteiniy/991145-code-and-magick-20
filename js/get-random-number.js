'use strict';

(function () {
  window.getRandomNumber = function (min, max) {
    return min + Math.random() * (max - min);
  };
})();
