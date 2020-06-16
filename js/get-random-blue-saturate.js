'use strict';

(function () {
  window.getRandomBlueSaturate = function () {
    var saturate = window.getRandomNumber(0, 100);
    return 'hsl(240,' + saturate + '%,50%)';
  };
})();
