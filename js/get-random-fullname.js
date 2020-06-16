'use strict';

(function () {
  window.getRandomFullName = function (names, surnames) {
    return names[window.getRandomIndex(names.length)] + ' ' + surnames[window.getRandomIndex(surnames.length)];
  };
})();
