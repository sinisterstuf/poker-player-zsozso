var stateProvider = require("./stateProvider");
var logger = require("./../logger/logger");
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
    logger(my_cards);
    logger(flop_cards);
    console.log("cards", my_cards);
    console.log("cards", flop_cards);
    if(isCardsGoodBySuit(my_cards[0]) || isCardsGoodByRank(my_cards[1])){
      logger("my cards GOOD");
      return true;
    }
    logger("my cards BAD");
    return false;
  };



	return this;
})();


function isCardsGoodBySuit(card1, card2) {
  if (card1 == card2) {
    return true;
  }
  return false;
}

function isCardsGoodByRank(card1, card2) {
  if (card1 == card2) {
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
