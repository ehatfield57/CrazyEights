var UiInterface = require('../app/UiInterface.js');
var CrazyEights = require('../app/CrazyEights.js');
var Card = require('../app/Card.js');

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
    let aCard = uiInterface.playCard(theGame.players[0], new Card('2-H'));
    console.log(`uiInteface test player ${theGame.players[0].name} played: ${aCard}`);
  });

  it('should play a robot card', () => {
    let aCard = uiInterface.playCard(theGame.players[1], new Card('2-H'));
    console.log(`uiInteface test player ${theGame.players[1].name} played: ${aCard}`);
  });

  it('should change suite when an 8 is played', () => {
    let aCard = uiInterface.playCard(theGame.players[0], new Card('8-H'));
    console.log(`uiInteface test player ${theGame.players[0].name} played: ${aCard}`);
  });

  it('should change suite when the robot plays an 8 card', () => {
    let aCard = uiInterface.playCard(theGame.players[1], new Card('8-H'));
    console.log(`uiInteface test player ${theGame.players[1].name} played: ${aCard}`);
  });
});
