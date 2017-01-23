var UiInterface = require('../app/UiInterface.js');
var CrazyEights = require('../app/CrazyEights.js');
var Card = require('../app/Card.js');

var theGame = new CrazyEights(['Ed', 'Robot']);
theGame.initialDraw();
var uiInterface = new UiInterface();

uiInterface.displayStatus(theGame);

uiInterface.playCard(theGame.players[0], new Card('2-H')).then( (playedCard) => {
  console.log(`uiInteface test player ${theGame.players[0].name} played: ${playedCard}`);
});

