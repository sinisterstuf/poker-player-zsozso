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

  //check my card are good enought to keep or raise
  //preflop tactic
  this.cardRankGood = function(){
    var my_cards = stateProvider.getMyCards();
    var flop_cards = stateProvider.getFlopCards();
    console.log(my_cards);
    console.log(flop_cards);
    console.log("cards", my_cards);
    console.log("cards", flop_cards);
    if((isCardsGoodBySuit(my_cards[0],my_cards[1]) || isCardsGoodByRank(my_cards[0], my_cards[1])) && !lameCards(my_cards)){
      console.log("my cards GOOD");
      return true;
    }
    console.log("my cards BAD");
    return false;
  };



	return this;
})();


function isCardsGoodBySuit(card1, card2) {
  if (card1.suit == card2.suit) {
    return true;
  }
  return false;
}

function isCardsGoodByRank(card1, card2) {
  if (card1.rank == card2.rank) {
    return true;
  }
  return false;
}

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
    if (lowCards(cards) && !isPair(cards)){
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

