var Card = require('./Card.js');

class Ai {
  constructor(hand) {
    this.hand = hand;
  }

  play(topCard) {
    let report = this.hand.report();
    return new Card('6-C');
  }
}

module.exports = Ai;