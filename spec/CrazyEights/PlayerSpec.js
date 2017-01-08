var Player = require('../../app/Player.js');
var Deck = require('../../app/Deck.js');
var Card = require('../../app/Card.js');

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
    expect(aPlayer.hand.cardsRemaining()).toBe(0);
  });

  it('can add a card to their hand', () => {
    let aCard = aDeck.draw();
    let numCardsInHand = aPlayer.remainingCards();
    aPlayer.addCardToHand(aCard);
    expect(numCardsInHand + 1).toBe(aPlayer.remainingCards());
  });

  it('can draw a card', () => {
    let aCard = aPlayer.drawCardFrom(aDeck);
    expect(aCard.constructor.name).toBe('Card');
  });

  it('can play a card', () => {
    aPlayer.drawCardFrom(aDeck);
    let numCardsInHand = aPlayer.remainingCards();
    let aCard = aPlayer.playACard(aDeck.draw(), aDeck);
    expect(aCard.constructor.name).toBe('Card');
    expect(numCardsInHand - 1).toBe(aPlayer.remainingCards());
  });

  it('can win by playing all cards in hand', () => {
    expect(aPlayer.hasWon()).toBe(true);
  });
});

describe('should play or draw card', () => {
  let aPlayer = new Player('Sam');
  let aDeck = new Deck();

  aPlayer.addCardToHand( new Card( 'A-H' ));
  aPlayer.addCardToHand( new Card( '2-C' ));
  aPlayer.addCardToHand( new Card( '3-S' ));
  aPlayer.addCardToHand( new Card( '4-D' ));
  aPlayer.addCardToHand( new Card( '8-H' ));

  console.log('Hi Edward, the players hand reports:',aPlayer.hand.report());

  it('should play it rank if possible', () => {
    let playedCard = aPlayer.playACard( new Card('2-H'), aDeck);
    console.log('Hi Edward rank, playing card: ' + playedCard);
    expect(playedCard.toString()).toBe('2-C');
  });

  it('should play in suite if possible', () => {
    let playedCard = aPlayer.playACard( new Card('5-H'), aDeck);
    console.log('Hi Edward suite, playing card: ' + playedCard);
    expect(playedCard.toString()).toBe('A-H');
  });

  it('should play an eight if possible', () => {
    let playedCard = aPlayer.playACard( new Card('5-C'), aDeck);
    console.log('Hi Edward eight, playing card: ' + playedCard);
    expect(playedCard.toString()).toBe('8-H');
  });

  it('should draw a card till playable', () => {
    let playedCard = aPlayer.playACard( new Card('6-C'), aDeck);
    console.log('Hi Edward draw, playing card: ' + playedCard);
    expect(playedCard.toString()).toBe('');
  });
});
