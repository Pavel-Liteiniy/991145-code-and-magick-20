'use strict';

(function () {
  window.removeByClass = function (selector, deletedClass) {
    document.querySelector(selector).classList.remove(deletedClass);
  };
})();
