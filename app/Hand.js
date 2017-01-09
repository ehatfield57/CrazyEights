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
}

module.exports = Hand;