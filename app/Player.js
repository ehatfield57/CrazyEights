var Hand = require('./Hand.js');

class Player {
  constructor(aName) {
    this.name = aName;
    this.hand = new Hand();
  }

  addCardToHand(card) {
    this.hand.accept(card);
  }

  drawCardFrom(deck) {
    let aCard = deck.draw();
    this.addCardToHand( aCard );
    return aCard;
  }

  playACard(topCard, deck) {
    return this.hand.pick();
  }

  remainingCards() {
    return this.hand.cardsRemaining();
  }

  hasWon() {
    return this.remainingCards() === 0;
  }
}

module.exports = Player;