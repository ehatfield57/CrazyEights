var Card = require('./Card.js');

class Deck {
  constructor() {
    this.cards = [];
    ['H','C','D','S'].forEach( (suite) => {
      ['A','2','3','4','5','6','7','8','9','10','J','Q','K'].forEach( (rank) => {
        this.cards.push( new Card(`${rank}-${suite}`) );
      });
    });
  }

  draw() {
    return this.cards.pop();
  }

  empty() {
    return this.cards.length === 0;
  }

  shuffle() {
    for (let x=0; x < 1000; x++) {
      let from = Math.floor(Math.random() * 52);
      let to = Math.floor(Math.random() * 52);
      [ this.cards[from], this.cards[to] ] = [ this.cards[to], this.cards[from] ];
    }
    return this;
  }
}

module.exports = Deck;