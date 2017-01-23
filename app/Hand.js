class Hand {
  constructor() {
    this.cards = [];
  }

  cardsRemaining() {
    return this.cards.length;
  }

  cardList() {
    return this.cards;
  }

  accept(aCard) {
    this.cards.push(aCard);
  }

  pick(index) {
    return this.cards.splice(index, 1)[0];
  }

  inHand(aCard) {
    return this.cards.map( (card) => card.card ).includes(aCard);
  }

  toString() {
    return this.cards.map( (card) => card.card ).join(', ');
  }
}

module.exports = Hand;