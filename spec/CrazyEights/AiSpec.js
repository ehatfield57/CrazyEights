var Ai = require('../../app/Ai.js');

var Player = require('../../app/Player.js');
var Card = require('../../app/Card.js');
var Deck = require('../../app/Deck.js');

describe('Ai', () => {
  let aPlayer;
  let anAi;

  beforeEach( () => {
    aPlayer = new Player('robo1');
    aPlayer.addCardToHand( new Card('2-C') );
    aPlayer.addCardToHand( new Card('3-C') );
    aPlayer.addCardToHand( new Card('4-H') );
    aPlayer.addCardToHand( new Card('4-D') );
    aPlayer.addCardToHand( new Card('8-D') );
    anAi = new Ai(aPlayer, new Deck() );
  });

  it('should play the suite it has most of', () => {
    let aCard = anAi.play( new Card('5-C') );
    expect(aCard.toString()).toBe('3-C');
  });

  it('should play the rank if no suite', () => {
    let aCard = anAi.play( new Card('3-S') );
    expect(aCard.toString()).toBe('3-C');
  });

  it('should play an eight if no rank or suite', () => {
    let aCard = anAi.play( new Card('9-S') );
    expect(aCard.toString()).toBe('8-D');
  });

  it('should draw cards if it cannot play', () => {
    anAi.play( new Card('9-S') ); // Get rid of the 8-D in the hand

    let cardCountInHand = anAi.cardsRemainingInHand();
    let bCard = anAi.play( new Card('7-S') );
    let currentCardCount = anAi.cardsRemainingInHand();

    expect( currentCardCount >= cardCountInHand ).toBe(true);
  });

  it('can generate a report', () => {
    let theReport = anAi.report();
    expect( theReport['2'].length ).toBe(1);
    expect( theReport['3'].length ).toBe(1);
    expect( theReport['4'].length ).toBe(2);
    expect( theReport['8'].length ).toBe(1);
    expect( theReport['H'].length ).toBe(1);
    expect( theReport['C'].length ).toBe(2);
    expect( theReport['D'].length ).toBe(2);
  });
});
