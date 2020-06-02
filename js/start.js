'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_BOTTOM = CLOUD_Y + CLOUD_HEIGHT;
var GAP = 10;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var BAR_HEIGHT = 150;

var titleRows = ['Ура вы победили!', 'Список результатов:'];

var drawText = function (ctx, text, x, y, color, font) {
  ctx.font = font || '16px PT Mono';
  ctx.fillStyle = color || '#000000';
  ctx.fillText(text, x, y);
};

var renderTitle = function (context, rows) {
  for (var i = 0; i < rows.length; i++) {
    drawText(context, rows[i], CLOUD_X + GAP * 2, CLOUD_Y + GAP * 3 + FONT_GAP * i);
  }
};

var addBarDescription = function (ctx, playerName, playerTime, barHeight, startPoint) {
  drawText(ctx, playerName, startPoint, CLOUD_BOTTOM - GAP * 2);
  drawText(ctx, Math.round(playerTime), startPoint, CLOUD_BOTTOM - GAP * 4 - FONT_GAP - barHeight);
};

var renderCloud = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomNumber = function (min, max) {
  return min + Math.random() * (max - min);
};

var getRandomBlueSaturate = function () {
  var saturate = getRandomNumber(0, 100);
  return 'hsl(240,' + saturate + '%,50%)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ffffff');

  renderTitle(ctx, titleRows);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barItemHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var barX = CLOUD_X + GAP * 3 + BAR_GAP * 2 * i;

    addBarDescription(ctx, players[i], times[i], barItemHeight, barX, '#000000');

    renderCloud(ctx, barX, CLOUD_BOTTOM - GAP * 3 - FONT_GAP - barItemHeight, BAR_WIDTH, barItemHeight, players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomBlueSaturate());
  }
};
