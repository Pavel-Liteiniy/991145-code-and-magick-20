'use strict';

(function () {
  var KEY_ESCAPE = 'Escape';
  var KEY_ENTER = 'Enter';

  var setupPlayerClasses = {
    setupBoard: '.setup-player',
    coat: '.setup-wizard .wizard-coat',
    eyes: '.setup-wizard .wizard-eyes',
    fireball: '.setup-fireball',
  };

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var SetupStartPosition = {
    X: '50%',
    Y: '80px',
    TRANSLATE_X: '-50%',
  };
  var setupClose = setup.querySelector('.setup-close');
  var setupPlayer = document.querySelector(setupPlayerClasses.setupBoard);

  var onPopupEscPress = function (evt) {
    if (evt.key === KEY_ESCAPE && !evt.target.classList.contains('setup-user-name')) {
      evt.preventDefault();
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    setupPlayer.addEventListener('click', window.customizationPlayer.onWizardClick);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupPlayer.removeEventListener('click', window.customizationPlayer.onWizardClick);
    setup.style.left = SetupStartPosition.X;
    setup.style.transform = 'translateX(' + SetupStartPosition.TRANSLATE_X + ')';
    setup.style.top = SetupStartPosition.Y;
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === KEY_ENTER) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === KEY_ENTER) {
      closePopup();
    }
  });

  window.setupAccess = {
    setupPlayerClasses: setupPlayerClasses,
    setupPlayer: setupPlayer,
  };
})();
