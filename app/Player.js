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

  removeCardFromHand(cardName) {
    this.hand.removeCard(cardName);
  }

  playACard(topCard, deck) {
    return this.hand.pick(0);
  }

  remainingCards() {
    return this.hand.cardsRemaining();
  }

  hasWon() {
    return this.remainingCards() === 0;
  }
}

module.exports = Player;