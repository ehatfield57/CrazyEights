var UiInterface = require('../../app/UiInterface.js');
var CrazyEights = require('../../app/CrazyEights.js');

describe('UiInterface', () => {
  let uiInterface;
  let theGame;

  beforeEach(() => {
    theGame = new CrazyEights(['Ed', 'Robot']);
    theGame.initialDraw();
    uiInterface = new UiInterface();
  });

  it('should display the status', () => {
    expect(uiInterface.displayStatus(theGame)).toBe(true);
  });

  it('should play a card', () => {
    let aCard = uiInterface.playCard(theGame.players[0], theGame);
    console.log(`uiInteface test player ${theGame.players[0].name} played: ${aCard}`);
  });

  it('should play a robot card', () => {
    let aCard = uiInterface.playCard(theGame.players[1], theGame);
    console.log(`uiInteface test player ${theGame.players[1].name} played: ${aCard}`);
  });
});