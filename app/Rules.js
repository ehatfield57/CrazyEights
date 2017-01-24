// Think 'constants'
class Rules {
  constructor() {
    this.maxNumberOfPlayers = 7;
  }

  handSize( numberOfPlayers ) {
    return (numberOfPlayers === 2) ? 7 : 5;
  }

  validNumberOfPlayers( numberOfPlayers ) {
    return (numberOfPlayers > 1 && numberOfPlayers <= this.maxNumberOfPlayers) ? true : false;
  }

  validPlay(aCard, topCard) {
    if (aCard.rank === '8') {
      return true;
    } else if (aCard.rank === topCard.rank) {
      return true;
    } else if (aCard.suite === topCard.suite) {
      return true;
    } else {
      return false;
    }
    return true;
  }
}

module.exports = Rules;