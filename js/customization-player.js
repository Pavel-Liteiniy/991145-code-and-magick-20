'use strict';

(function () {
  window.setupAccess.setupPlayerClasses = {
    setupBoard: '.setup-player',
    coat: '.setup-wizard .wizard-coat',
    eyes: '.setup-wizard .wizard-eyes',
    fireball: '.setup-fireball',
  };

  var onWizardClick = function (evt) {
    if (evt.target) {
      if (evt.target.matches(window.setupAccess.setupPlayerClasses.coat)) {
        window.setupAccess.setupPlayer.querySelector('input[name="coat-color"]').value = window.colorize(evt.target, window.similarCharacters.WizardCustom.COAT_COLORS, true);
      } else if (evt.target.matches(window.setupAccess.setupPlayerClasses.eyes)) {
        window.setupAccess.setupPlayer.querySelector('input[name="eyes-color"]').value = window.colorize(evt.target, window.similarCharacters.WizardCustom.EYES_COLORS, true);
      } else if (evt.target.matches(window.setupAccess.setupPlayerClasses.fireball)) {
        window.setupAccess.setupPlayer.querySelector('input[name="fireball-color"]').value = window.colorize(evt.target, window.similarCharacters.WizardCustom.FIREBALL_COLORS, false);
      }
    }
  };

  window.customizationPlayer = {
    onWizardClick: onWizardClick,
  };
})();
