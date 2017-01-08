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
});