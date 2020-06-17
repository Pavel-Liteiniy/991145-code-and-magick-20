'use strict';

(function () {
  window.colorize = function (element, colors, isFill) {
    var randomColor = colors[window.util.getRandomIndex(colors.length)];

    if (isFill) {
      element.style.fill = randomColor;
    } else {
      element.style.backgroundColor = randomColor;
    }

    return randomColor;
  };
})();