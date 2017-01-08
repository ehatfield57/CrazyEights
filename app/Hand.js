class Hand {
  constructor() {
    this.cards = [];
  }

  cardsRemaining() {
    return this.cards.length;
  }

  accept(aCard) {
    this.cards.push(aCard);
  }

  pick() {
    return this.cards.shift();
  }

  report() {
    let cardTypes = { 'A': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0,
      '9': 0, '10': 0, 'J': 0, 'Q': 0, 'K': 0, 'H': 0, 'S': 0, 'D': 0, 'C': 0, };

    this.cards.forEach( (aCard) => {
      cardTypes[ aCard.rank() ] += 1;
      cardTypes[ aCard.suite() ] += 1;
    });

    return cardTypes;
  }
}

module.exports = Hand;