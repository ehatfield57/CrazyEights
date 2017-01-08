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

  it('can generate a report', () => {
    aHand.accept( new Card('2-H') );
    aHand.accept( new Card('3-H') );
    aHand.accept( new Card('3-C') );
    aHand.accept( new Card('8-D') );
    aHand.accept( new Card('10-S') );

    let theReport = aHand.report();
    expect( theReport['2'] ).toBe(1);
    expect( theReport['3'] ).toBe(2);
    expect( theReport['8'] ).toBe(1);
    expect( theReport['10'] ).toBe(1);
    expect( theReport['H'] ).toBe(2);
    expect( theReport['C'] ).toBe(1);
    expect( theReport['D'] ).toBe(1);
    expect( theReport['S'] ).toBe(1);
    expect( theReport['9'] ).toBe(0);
  });
});