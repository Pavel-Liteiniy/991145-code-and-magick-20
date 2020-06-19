'use strict';

(function () {
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

  var removeByClass = function (selector, deletedClass) {
    document.querySelector(selector).classList.remove(deletedClass);
  };

  var customizePersonage = function (names, surnames, coatColors, eyesColors) {
    return {
      name: window.util.getRandomFullName(names, surnames),
      coatColor: coatColors[window.util.getRandomIndex(coatColors.length)],
      eyesColor: eyesColors[window.util.getRandomIndex(eyesColors.length)],
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
    removeByClass('.setup-similar', 'hidden');
  };

  renderFragment(similarWizardTemplate, similarListElement, WIZARD_NUMBER);

  window.similarCharacters = {
    WizardCustom: WizardCustom,
  };
})();
