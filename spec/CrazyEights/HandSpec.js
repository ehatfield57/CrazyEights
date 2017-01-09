var Hand = require('../../app/Hand.js');
var Card = require('../../app/Card.js');

describe('Hand', () => {
  let aHand;

  beforeEach( () => {
    aHand = new Hand();
  });

  it('can accept cards', () => {
    expect( aHand.cardsRemaining()).toBe( 0 );
    aHand.accept( new Card('2-H') );
    expect( aHand.cardsRemaining()).toBe( 1 );
  });

  it('should lose a card when playing a card in the hand', () => {
    aHand.accept( new Card('2-H') );
    expect( aHand.cardsRemaining()).toBe( 1 );
    aHand.pick( 0 );
    expect( aHand.cardsRemaining()).toBe( 0 );
  });
});