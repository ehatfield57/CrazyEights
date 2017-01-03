var Player = require('../../app/Player.js');
var Deck = require('../../app/Deck.js');

describe('Player', () => {
  let playerName = 'Fred';
  let aPlayer;
  let aDeck;

  beforeEach( () => {
    aPlayer = new Player(playerName);
    aDeck = new Deck();
  });

  it('should have a name', () => {
    expect(aPlayer.name).toBe(playerName);
  });

  it('should have a hand of no cards', () => {
    expect(aPlayer.hand.length).toBe(0);
  });

  it('can draw a card', () => {
    let aCard = aPlayer.drawCardFrom(aDeck);
    expect(aCard.constructor.name).toBe('Card');
  });

  it('can play a card', () => {
    aPlayer.drawCardFrom(aDeck);
    let aCard = aPlayer.playACard();
    expect(aCard.constructor.name).toBe('Card');
  });

  it('can win by playing all cards in hand', () => {
    expect(aPlayer.hasWon()).toBe(true);
  });
});