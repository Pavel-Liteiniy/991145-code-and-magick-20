'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var similarWizardClasses = {
  wizardName: '.setup-similar-label',
  wizardCoat: '.wizard-coat',
  wizardEyes: '.wizard-eyes',
};

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
    coatColor: 'rgb(' + coatColors[getRandomIndex(coatColors.length)] + ')',
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
  var similarWizardsСustomization = getPersonagesArray(WIZARD_NUMBER, WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLORS, EYES_COLORS);
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardNumber; i++) {
    fragment.appendChild(createWizard(template, similarWizardsСustomization[i], similarWizardClasses));
  }

  container.appendChild(fragment);
};

findAndRemoveClass('.setup-similar', 'hidden');
renderFragment(similarWizardTemplate, similarListElement, WIZARD_NUMBER);
findAndRemoveClass('.setup', 'hidden');
