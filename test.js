var gs = require('./docs/game_state');
var logic = require('./logic');
require('should');

describe('calulateMove', function () {
  it('returns an int', function () {
    var result = logic.calulateMove();
    result.should.eql(parseInt(result));
  });
});
