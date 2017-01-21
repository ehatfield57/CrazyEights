let Rules = require('../app/Rules.js');

describe('Rules', () => {
  let ruleSet;

  beforeEach( () => {
    ruleSet = new Rules();
  });

  it('should specify the number of cards dealt', () => {
    expect(ruleSet.handSize( numberOfPlayers = 2 )).toBe( 7 );
    expect(ruleSet.handSize( numberOfPlayers = 3 )).toBe( 5 );
  });

  it('should limit the number of players', () => {
    expect(ruleSet.maxNumberOfPlayers).toBe( 7 );
  });

  it('should not allow invalid numbers of players', () => {
    expect(ruleSet.validNumberOfPlayers(0)).toBe(false);
    expect(ruleSet.validNumberOfPlayers(1)).toBe(false);
    expect(ruleSet.validNumberOfPlayers(2)).toBe(true);
    expect(ruleSet.validNumberOfPlayers(7)).toBe(true);
    expect(ruleSet.validNumberOfPlayers(8)).toBe(false);
    expect(ruleSet.validNumberOfPlayers(99)).toBe(false);
  });
});