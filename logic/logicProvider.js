var stateProvider = require("./stateProvider");
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
    if (
        (toNum(cards[0].rank) < 4 || toNum(cards[1].rank) < 4) &&
        cards[0].rank != cards[1].rank
       ) {
        return true
    } else {
        return false
    }
}
