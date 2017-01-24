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

  removeCard(cardName) {
    this.pick(this.cardNames().indexOf(cardName));
  }

  cardNames() {
    return this.cards.map( (card) => card.card );
  }

  inHand(aCard) {
    return this.cardNames().includes(aCard);
  }

  toString() {
    return this.cardNames().join(', ');
  }
}

module.exports = Hand;