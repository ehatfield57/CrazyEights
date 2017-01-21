var Deck = require('../app/Deck.js');

describe('Deck', () => {
  let deck;
  let card;

  beforeEach( () => {
    deck = new Deck();
  });

  it('should have 52 cards', () => {
    expect( deck.cards.length ).toBe(52);
  });

  it('can be drawn from', () => {
    card = deck.draw();
    expect(card !== null ).toBe(true);
  });

  it('should draw a Card object', () => {
    card = deck.draw();
    expect(card.constructor.name).toBe('Card');
  });

  it('can be shuffled', () => {
    deck.shuffle();
    let firstCard = deck.draw();
    expect( firstCard !== card ).toBe(true);
  });

  it('can be empty', () => {
    expect( deck.empty() ).toBe(false);
    for( let x=0; x < 51; x++) { deck.draw(); }
    expect( deck.empty() ).toBe(false);
    deck.draw();
    expect( deck.empty() ).toBe(true);
  });
});