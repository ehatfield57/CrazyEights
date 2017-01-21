var Card = require('../app/Card.js');
var Deck = require('../app/Deck.js');

describe('Card', () => {
  let theDeck;
  let aCard;

  beforeEach( () => {
    theDeck = new Deck().shuffle();
    aCard = theDeck.draw();
  });

  it('has a valid Rank', () => {
    expect(aCard.rank).toMatch(/^(A|2|3|4|5|6|7|8|9|10|J|Q|K)$/);
  });

  it('has a valid Suite', () => {
    expect(aCard.suite).toMatch(/^[DSHC]$/);
  });

  it('can have the suite changed and reset', () => {
    let testCard = new Card('8-H');
    expect(testCard.suite).toBe('H');
    testCard.changeSuite('S');
    expect(testCard.suite).toBe('S');
    expect(testCard.toString()).toBe('8-H');
  });
});