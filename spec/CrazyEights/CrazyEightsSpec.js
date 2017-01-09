var CrazyEights = require('../../app/CrazyEights.js');

var players = ['Player', 'Robot'];

describe('Crazy Eights', () => {
  it('should play to win or lose', () => {
    let c8 = new CrazyEights(players);
    expect( c8.play() ).toBe('win');
  });
});