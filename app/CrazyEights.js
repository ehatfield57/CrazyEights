var Deck   = require('./Deck.js');
var Table  = require('./Table.js');
var Player = require('./Player.js');
var Rules  = require('./Rules.js');
var UiInterface = require('./UiInterface.js');

class CrazyEights {
  constructor(playerNames) {
    this.theRules = new Rules();
    this.deck     = new Deck();
    this.table    = new Table(this.deck);
    this.players  = playerNames.map( (playerName) => new Player(playerName));
    this.uiInterface = new UiInterface();
  }

  initialDraw() {
    for(let x=0; x < this.theRules.handSize(this.players.length); x++) {
      this.players.forEach( (aPlayer) => {
        aPlayer.drawCardFrom(this.deck);
      });
    }
  }

  play() {
    let someoneWon = false;
    this.initialDraw();
    while (!someoneWon) {
      this.players.forEach((player) => {
        this.uiInterface.displayStatus(this);
        this.uiInterface.playCard(player, this);

        if (player.hasWon()) {
          this.uiInterface.hasWon(player);
          someoneWon = true;
        }
      });
    }
    return 'win';
  }
}

module.exports = CrazyEights;