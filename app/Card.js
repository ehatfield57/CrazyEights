class Card {
  constructor(aCard) {
    this.card = aCard;
  }

  rank() {
    return this.card.split('-')[0];
  }

  suite() {
    return this.card.split('-')[1];
  }

  toString() {
    return this.card;
  }
}

module.exports = Card;