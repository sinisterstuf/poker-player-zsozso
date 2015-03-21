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

function lowCards(cards) {
    // returns true if both cards below lame limit
    if (toNum(cards[0].rank) < lim && toNum(cards[1].rank) < lim) {
        return true
    } else {
        return false
    }
}

function lameCards(cards) {
    // returns true if either card below lame limit and they are not a pair
    if (
        (toNum(cards[0].rank) < lim || toNum(cards[1].rank) < lim) &&
        cards[0].rank != cards[1].rank
       ) {
        return true
    } else {
        return false
    }
}
