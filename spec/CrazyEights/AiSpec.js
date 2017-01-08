var Ai = require('../../app/Ai.js');

var Hand = require('../../app/Hand.js');
var Card = require('../../app/Card.js');

describe('Ai', () => {
  let aHand;
  let anAi;

  beforeEach( () => {
    aHand = new Hand();
    aHand.accept( new Card('2-C') );
    aHand.accept( new Card('3-C') );
    aHand.accept( new Card('4-H') );
    aHand.accept( new Card('4-D') );
    anAi = new Ai(aHand);
  });

  it('should play the suite it has most of', () => {
    let aCard = anAi.play( new Card('5-C') );
    expect(aCard.suite).toBe('C');
  });

  it('should play the rank if no suite', () => {
    let aCard = anAi.play( new Card('3-S') );
    expect(aCard.rank).toBe('3');
  });

  it('can generate a report', () => {
    let theReport = anAi.report();
    expect( theReport['2'].length ).toBe(1);
    expect( theReport['3'].length ).toBe(1);
    expect( theReport['4'].length ).toBe(2);
    expect( theReport['H'].length ).toBe(1);
    expect( theReport['C'].length ).toBe(2);
    expect( theReport['D'].length ).toBe(1);
  });
});
