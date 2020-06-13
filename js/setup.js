'use strict';

var WIZARD_NUMBER = 4;
var WizardCustom = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardClasses = {
  wizardName: '.setup-similar-label',
  wizardCoat: '.wizard-coat',
  wizardEyes: '.wizard-eyes',
};
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupPlayerClasses = {
  setupBoard: '.setup-player',
  coat: '.setup-wizard .wizard-coat',
  eyes: '.setup-wizard .wizard-eyes',
  fireball: '.setup-fireball',
};
var KEY_ESCAPE = 'Escape';
var KEY_ENTER = 'Enter';
var setupPlayer = document.querySelector(setupPlayerClasses.setupBoard);

var findAndRemoveClass = function (selector, deletedClass) {
  document.querySelector(selector).classList.remove(deletedClass);
};

var getRandomIndex = function (arrayLength) {
  return Math.floor(Math.random() * arrayLength);
};

var getRandomFullName = function (names, surnames) {
  return names[getRandomIndex(names.length)] + ' ' + surnames[getRandomIndex(surnames.length)];
};

var customizePersonage = function (names, surnames, coatColors, eyesColors) {
  return {
    name: getRandomFullName(names, surnames),
    coatColor: coatColors[getRandomIndex(coatColors.length)],
    eyesColor: eyesColors[getRandomIndex(eyesColors.length)],
  };
};

var getPersonagesArray = function (length, names, surnames, coatColors, eyesColors) {
  var PersonagesArray = [];

  for (var i = 0; i < length; i++) {
    PersonagesArray.push(customizePersonage(names, surnames, coatColors, eyesColors));
  }

  return PersonagesArray;
};

var createWizard = function (template, customization, classes) {
  var similarWizard = template.cloneNode(true);

  similarWizard.querySelector(classes.wizardName).textContent = customization.name;
  similarWizard.querySelector(classes.wizardCoat).style.fill = customization.coatColor;
  similarWizard.querySelector(classes.wizardEyes).style.fill = customization.eyesColor;

  return similarWizard;
};

var renderFragment = function (template, container, wizardNumber) {
  var similarWizardsСustomization = getPersonagesArray(WIZARD_NUMBER, WizardCustom.WIZARD_NAMES, WizardCustom.WIZARD_SURNAMES, WizardCustom.COAT_COLORS, WizardCustom.EYES_COLORS);
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardNumber; i++) {
    fragment.appendChild(createWizard(template, similarWizardsСustomization[i], similarWizardClasses));
  }

  container.appendChild(fragment);
};

var changeColor = function (element, colors, isFill) {
  var randomColor = colors[getRandomIndex(colors.length)];

  if (isFill) {
    element.style.fill = randomColor;
  } else {
    element.style.backgroundColor = randomColor;
  }

  return randomColor;
};

var onPopupEscPress = function (evt) {
  if (evt.key === KEY_ESCAPE && !evt.target.classList.contains('setup-user-name')) {
    evt.preventDefault();
    closePopup();
  }
};

var onWizardClick = function (evt) {
  if (evt.target) {
    if (evt.target.matches(setupPlayerClasses.coat)) {
      setupPlayer.querySelector('input[name="coat-color"]').value = changeColor(evt.target, WizardCustom.COAT_COLORS, true);
    } else if (evt.target.matches(setupPlayerClasses.eyes)) {
      setupPlayer.querySelector('input[name="eyes-color"]').value = changeColor(evt.target, WizardCustom.EYES_COLORS, true);
    } else if (evt.target.matches(setupPlayerClasses.fireball)) {
      setupPlayer.querySelector('input[name="fireball-color"]').value = changeColor(evt.target, WizardCustom.FIREBALL_COLORS, false);
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  setupPlayer.addEventListener('click', onWizardClick);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  setupPlayer.removeEventListener('click', onWizardClick);
};

findAndRemoveClass('.setup-similar', 'hidden');
renderFragment(similarWizardTemplate, similarListElement, WIZARD_NUMBER);

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
