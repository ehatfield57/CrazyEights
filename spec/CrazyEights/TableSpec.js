var Table = require('../../app/Table.js');
var Deck  = require('../../app/Deck.js');

describe('Table', () => {
  let theTable;
  beforeEach( () => {
    theTable = new Table(new Deck());
  });

  it('has a top card', () => {
    expect( theTable.getTopCard() !== null ).toBe(true);
  });
});