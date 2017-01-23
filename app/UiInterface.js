const readline = require('readline');

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

  playCard(player, topCard, deck) {
    return new Promise( (resolve, failure) => {
      let aCard = '';
      if (/robot/i.test(player.name)) {
        aCard = player.playACard(topCard, deck);
        console.log(`Player ${player.name} plays a ${aCard}`);

      } else {
        this.askUser(
          `\nPlay a card ${player.name} (${player.hand}): `,
          (testCard) => {
            let bar = player.hand.inHand(testCard);

            if (player.hand.inHand(testCard)) {
              return testCard
            } else {
              console.log(`Sorry, but that card is not in players ${player.name}s hand. Please try again.\n`);
            }
          }
        ).then( (aCardName) => {
          resolve(aCardName);
        });
      }
    });
  }

  askUser(prompt, validation) {
    return new Promise( (resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question(prompt, (answer) => {
        rl.close();
        if (answer === 'quit' || answer === 'exit') {
          throw('quit');
        } else if (validation(answer)) {
          resolve(answer);
        } else {
          return this.askUser(prompt, validation);
        }
      });
    });
  }


  askForNewSuite(player) {
    if (/robot/i.test(player.name)) {
      // Generate report based on robot hand, and choose highest number of suite
    } else {
      this.askUser(
        `\nSet the new suite ${player.name}: `,
        (newSuite) => {
          if (newSuite.test(/^[HCDS]$/)) {
            return newSuite
          } else {
            console.log(`Sorry, but that's not a valid suite. Please try again.\n`);
          }
        }
      ).then( (aSuite) => {
        resolve(aSuite);
      });
    }
  }

  hasWon(player) {
    console.log(`\nPlayer ${player.name} has won!`);
    return 'win';
  }
}

module.exports = UiInterface;