'use strict';

(function () {
  var KEY_ESCAPE = 'Escape';
  var KEY_ENTER = 'Enter';

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandler = setupDialogElement.querySelector('.upload');

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

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setupDialogElement.style.top = setupDialogElement.offsetTop - shift.y + 'px';
      setupDialogElement.style.left = setupDialogElement.offsetLeft - shift.x + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.setup = {
    playerClasses: setupPlayerClasses,
    player: setupPlayer,
  };
})();
