var Deck = require('./Deck.js');

class Table {
  constructor(deck) {
    this.deck = deck;
    this.deck.shuffle();
    this.topCard = this.deck.draw();
    this.discard = [];
  }

  getTopCard() {
    return this.topCard;
  }
}

module.exports = Table;