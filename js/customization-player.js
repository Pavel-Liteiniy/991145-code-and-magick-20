'use strict';

(function () {
  var colorize = function (element, colors, isFill) {
    var randomColor = colors[window.util.getRandomIndex(colors.length)];

    if (isFill) {
      element.style.fill = randomColor;
    } else {
      element.style.backgroundColor = randomColor;
    }

    return randomColor;
  };

  var onWizardClick = function (evt) {
    if (evt.target) {
      if (evt.target.matches(window.setup.playerClasses.coat)) {
        window.setup.player.querySelector('input[name="coat-color"]').value = colorize(evt.target, window.similarCharacters.WizardCustom.COAT_COLORS, true);
      } else if (evt.target.matches(window.setup.playerClasses.eyes)) {
        window.setup.player.querySelector('input[name="eyes-color"]').value = colorize(evt.target, window.similarCharacters.WizardCustom.EYES_COLORS, true);
      } else if (evt.target.matches(window.setup.playerClasses.fireball)) {
        window.setup.player.querySelector('input[name="fireball-color"]').value = colorize(evt.target, window.similarCharacters.WizardCustom.FIREBALL_COLORS, false);
      }
    }
  };

  window.customizationPlayer = {
    onWizardClick: onWizardClick,
  };
})();
