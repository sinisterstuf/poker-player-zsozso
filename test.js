var gs = require('./docs/game_state');
var logic = require('./logic');
require('should');

describe('calulateMove', function () {
  it('returns an int', function () {
    console.log("logic",typeof logic);
    console.log("logic has calc",logic.hasOwnProperty("calculateMove"));
    console.log("logic calc type",typeof logic.calculateMove);
    console.log("logic calc type return type",typeof logic.calculateMove());
    var result = logic.calculateMove(gs);
    result.should.eql(parseInt(result));
  });
});
