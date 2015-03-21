var stateProvider = require("./stateProvider");
var constants = require('../constants');
var lim = constants.lameLimit;
module.exports = (function(){
	//TODO:

	this.getBetAmount = function() {
		var bet = 500;
		//get bet amount
		//calculation and some calculation logic goes here
		return bet;
	};

	this.getCheckAmount = function() {
		//TODO:
		//return stateProvider.getCheckAmount()
		return 10;
	};

	return this;
})();

function toNum(c) {
    switch (c) {
        case 'J':
            return 11;
        case 'Q':
            return 12;
        case 'K':
            return 13;
        case 'A':
            return 14;

        default:
            return parseInt(c);
    }
}

function lameCards(cards) {
    // returns true if either card below lame limit and they are not a pair
    if (lowCards() && !isPair()){
        return true
    } else {
        return false
    }
}

function lowCards(cards) {
    // returns true if both cards below lame limit
    if (toNum(cards[0].rank) < lim && toNum(cards[1].rank) < lim) {
        return true
    } else {
        return false
    }
}

function isPair(cards){
  // returns true if the hand cards are pair
  if(cards[0].rank == cards[1].rank){
    return true;
  } else {
    return false;
  }
}

function isSameSuit(cards){
  // returns true if hand cards's suit are the same
  if(cards[0].suit == cards[1].suit){
    return true;
  } else {
    return false;
  }
}
