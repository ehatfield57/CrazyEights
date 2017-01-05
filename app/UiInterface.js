var prompt = require('Prompt');

class UiInterface {
  constructor() {
  }

  displayStatus(game) {
    console.log(`\nTop card: ${game.table.getTopCard()}`);
    game.players.forEach( (player) => {
      console.log(`\tPlayer ${player.name} has ${player.remainingCards()} cards left`);
    });
    return true; // Used in test to show existence of this function
  }

  playCard(player, topCard) {
    if (/robot/i.test(player.name)) {
      let aCard = player.playACard(topCard);
      console.log(`Player ${player.name} plays a ${aCard}`);

    } else {
      console.log(`Play a card ${player.name}: ${player.hand}`);
      prompt.start();
      prompt.get([{
        name: 'card',
        default: '2-C'
      }], (err, result) => {
        if (err) { throw err; }
        console.log(`Player ${player.name} plays a ${result.card}`);
      });
    }
  }

  hasWon(player) {
    console.log(`\nPlayer ${player.name} has won!`);
    return 'win';
  }
}

module.exports = UiInterface;