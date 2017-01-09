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
    console.log('Hi Edward, aCard:',aCard);
    expect(aCard.constructor.name).toBe('Card');
    expect(numCardsInHand - 1).toBe(aPlayer.remainingCards());
  });

  it('can win by playing all cards in hand', () => {
    expect(aPlayer.hasWon()).toBe(true);
  });
});

