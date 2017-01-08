var Card = require('./Card.js');
var UiInterface = require('./UiInterface.js');

class Ai {
  constructor(hand) {
    this.hand = hand;
  }

  report() {
    let cardTypes = { 'A': [], '2': [], '3': [], '4': [], '5': [], '6': [], '7': [], '8': [],
      '9': [], '10': [], 'J': [], 'Q': [], 'K': [], 'H': [], 'S': [], 'D': [], 'C': [] };

    this.hand.cardList().forEach( (aCard, index) => {
      cardTypes[ aCard.rank ].push( index );
      cardTypes[ aCard.suite ].push( index );
    });

    return cardTypes;
  }

  play(topCard) {
    let card = '';
    while (card === '') {
      card = this.playFromExistingHand(topCard);
    }
    return card;
  }

  playFromExistingHand(topCard) {
    let report = this.report();

    let topCardRank = topCard.rank;
    let topCardSuite = topCard.suite;

    if (topCardRank === '8') {
      topCardSuite = UiInterface.askForNewSuite();
    }

    if (report[topCardSuite].length > 0) {
      return this.hand.pick( report[topCardSuite].pop() );
    }

    if (report[topCardRank].length > 0) {
      return this.hand.pick( report[topCardRank].pop() );
    }

    return '';
  }
}

module.exports = Ai;