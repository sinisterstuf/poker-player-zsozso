var gs = require('./docs/game_state');
var logic = require('./logic');
require('should');

describe('logic', function () {

  describe('#calulateMove', function () {

    it('returns 0 on exception', function () {
      // causing exception by not providing necessary args
      var result = logic.calculateMove();
      result.should.eql(0);
    });

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

  });

  describe('#isPair', function () {
    var lp = require('./logic/logicProvider');

    it('finds a pair', function () {
      var cards = [
        { "rank": "6", "suit": "hearts" },
        { "rank": "6", "suit": "spades" }
      ];
      lp.isPair(cards).should.eql(true);
    });

    it('finds a non-pair', function () {
      var cards = [
        { "rank": "6", "suit": "hearts" },
        { "rank": "K", "suit": "spades" }
      ];
      lp.isPair(cards).should.eql(false);
    });
  });

});
