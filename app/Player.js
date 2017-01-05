class Player {
  constructor(aName) {
    this.name = aName;
    this.hand = [];
  }

  drawCardFrom(deck) {
    let aCard = deck.draw();
    this.hand.push( aCard );
    return aCard;
  }

  playACard(topCard) {
    return this.hand.pop();
  }

  remainingCards() {
    return this.hand.length;
  }

  hasWon() {
    return this.remainingCards() === 0;
  }
}

module.exports = Player;