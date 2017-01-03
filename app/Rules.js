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
}

module.exports = Rules;