var stateProvider = require("./stateProvider");
var constants = require('./configProvider');
var lim = constants.get('lameLimit');

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
    var goodPoint = 0;
    var badPoint = 0;
    console.log(my_cards);
    console.log(flop_cards);
    console.log("cards", my_cards);
    console.log("cards", flop_cards);

    if(isCardsGoodBySuit(my_cards[0],my_cards[1])){
      goodPoint+=2;
    } else {
      badPoint++;
    }

    if(isCardsGoodByRank(my_cards[0], my_cards[1])){
      goodPoint+=4;
    } else {
      badPoint++;
    }

    if(isPair(my_cards) && !lowCards(my_cards)){
      //COOL CARDS!
      console.log("cool commit");
      return true;
    }

    if(!lowCards(my_cards) && flop_cards.length == 0){
      return true;
    }

    if(!lameCards(my_cards)){
      goodPoint+=2;
    } else {
      badPoint+=10;
      if (flop_cards.length == 0){
        return false;
      }
    }

    if(goodPoint>badPoint && goodPoint > 6){
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
}; module.exports.isPair = isPair;

