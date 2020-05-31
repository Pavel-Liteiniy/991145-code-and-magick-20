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
var BAR_X_GAP = CLOUD_X + GAP * 3;
var PLAYER_BAR_COLOR = 'rgba(255, 0, 0, 1)';

var renderTitle = function (context, rows) {
  context.font = '16px PT Mono';
  context.textBaseline = 'hanging';

  for (var i = 0; i < rows.length; i++) {
    context.fillText(rows[i], CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_GAP * i);
  }
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

var getRandomColor = function () {
  var h = getRandomNumber(1, 360);
  var s = getRandomNumber(0, 100);
  var l = getRandomNumber(0, 100);
  return 'hsl(' + h + ',' + s + '%,' + l + '%)';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';

  renderTitle(ctx, titleRows);

  var maxTime = getMaxElement(times);

  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';

  for (var i = 0; i < players.length; i++) {
    var barItemHeight = (BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], BAR_X_GAP + BAR_GAP * 2 * i, CLOUD_BOTTOM - GAP * 2);
    ctx.fillText(Math.round(times[i]), BAR_X_GAP + BAR_GAP * 2 * i, CLOUD_BOTTOM - GAP * 3 - FONT_GAP - barItemHeight);

    if (players[i] === 'Вы') {
      ctx.fillStyle = PLAYER_BAR_COLOR;
    } else {
      ctx.fillStyle = getRandomColor();
    }

    ctx.fillRect(BAR_X_GAP + BAR_GAP * 2 * i, CLOUD_BOTTOM - GAP * 3 - FONT_GAP - barItemHeight, BAR_WIDTH, barItemHeight);
  }
};
