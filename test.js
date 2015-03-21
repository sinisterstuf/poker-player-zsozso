var gs = require('./docs/game_state');
var logic = require('./logic');
require('should');

describe('logic', function () {

  describe('#calulateMove', function () {

    it('exists', function () {
      (typeof logic).should.eql('object');
      (logic.hasOwnProperty("calculateMove")).should.eql(true);
      (typeof logic.calculateMove).should.eql('function');
      (typeof logic.calculateMove(gs)).should.eql('number');
    });

    it('returns an int', function () {
      var result = logic.calculateMove(gs);
      result.should.eql(parseInt(result));
    });

    it('returns 0 on exception', function () {
      // causing exception by not providing necessary args
      var result = logic.calculateMove();
      result.should.eql(0);
    });

  });

});
