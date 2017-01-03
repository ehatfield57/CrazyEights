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
    this.initialDraw();
    this.players.forEach( (player) => {
      this.uiInterface.displayStatus(this);
      this.uiInterface.playCard(player, this);

      if (player.hasWon()) {
        return uiInterface.hasWon(player);
      }
    });
    return 'win';
  }
}

module.exports = CrazyEights;