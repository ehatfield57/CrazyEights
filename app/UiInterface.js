const readlineSync = require('readline-sync');
const Rules = require('./Rules.js');
const Card = require('./Card.js');

class UiInterface {
  constructor() {
    this.rules = new Rules();
  }

  displayStatus(game) {
    console.log(`\nTop card: ${game.table.getTopCard()}`);
    game.players.forEach( (player) => {
      console.log(`\tPlayer ${player.name} has ${player.remainingCards()} cards left`);
    });
    return true; // Used in test to show existence of this function
  }

  playCard(player, topCard, deck) {
    if (/robot/i.test(player.name)) {
      let aCard = player.playACard(topCard, deck);
      console.log(`Player ${player.name} plays a ${aCard}`);
      return aCard.card;

    } else {
      let aCardName = this.askUser(
          `\nPlay a card ${player.name} (${player.hand}): `,
          player.hand.cardNames()
      );
      if (this.rules.validPlay(new Card(aCardName), topCard)) {
        player.removeCardFromHand(aCardName);
        console.log(`Player ${player.name} plays a ${aCardName}`);
        return aCardName;
      } else {
        console.log('Invalid card played, please try again');
        this.playCard(player, topCard, deck);
      }
    }
  }

  askUser(prompt, validValues) {
    return readlineSync.question(prompt, {
      limit: validValues
    });
  }


  askForNewSuite(player) {
    if (/robot/i.test(player.name)) {
      // Generate report based on robot hand, and choose highest number of suite
    } else {
      this.askUser(
          `\nSet the new suite ${player.name}: `,
          ['H','C','D','S']
      );
    }
  }

  hasWon(player) {
    console.log(`\nPlayer ${player.name} has won!`);
    return 'win';
  }
}

module.exports = UiInterface;