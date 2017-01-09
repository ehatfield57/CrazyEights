class Card {
  constructor(aCard) {
    this.card = aCard;
    this.rank = this.card.split('-')[0];
    this.suite = this.card.split('-')[1];
  }

  changeSuite(suite) {
    this.suite = suite;
  }

  reset() {
    this.suite = this.card.split('-')[1];
  }

  toString() {
    return this.card;
  }
}

module.exports = Card;