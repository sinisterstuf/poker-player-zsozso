module.exports = {};

function calculateMove(game_state) {
  try {
    console.log("calculateMove called");
    var stateProvider = require("./logic/stateProvider");
    console.log("stateProvider loadState call");
    stateProvider.loadCurrentState(game_state);

    console.log("load logic Provider");
    var logicProvider = require("./logic/logicProvider");
    console.log("load gameDecision");
    var gameDecision = require("./logic/gameDecisions");

    var bet = 200;

    if(gameDecision.wantToBet()) {
      console.log("WANT TO BET");
      bet = get_minimum_raise(game_state) + bet;
      //return bet;
      //return gameDecision.getBetAmount();
    } else if(gameDecision.canWeKeepCards()) {
      console.log("KEEP CARDS");
      // keep the cards if we can check
      // TODO: return current bet!!!
      bet = 200;
      //return gameDecision.getCheckAmount();
    } else {
      console.log("FOLD");
      //FOLD THE CARDS;
      bet = 0;
    }

    if(isNaN(parseInt(bet))){
      bet = 0;
    }
    console.log("DO BET: "+bet);
    return bet;

    var bet = 110;
    var me = game_state["players"][game_state["in_action"]];
    var cards = me["hole_cards"];
    var first = cards[0];
    var second = cards[1];

    bet = get_minimum_raise(game_state) + bet;

    if(isNaN(parseInt(bet))){
      bet = 1100;
    }
    console.log("DO BET: "+bet);
    return bet;
  } catch(e) {
    dumpError(e);
    return 0;
  }
}; module.exports.calculateMove = calculateMove;

function get_minimum_raise(game_state){
  return parseInt(game_state["current_buy_in"] - game_state["players"][game_state["in_action"]]["bet"] + game_state["minimum_raise"]);
}

function dumpError(err) {
  if (typeof err === 'object') {
    if (err.message) {
      console.log('\nMessage: ' + err.message)
    }
    if (err.stack) {
      console.log('\nStacktrace:')
      console.log('====================')
      console.log(err.stack);
    }
  } else {
    console.log('dumpError :: argument is not an object');
  }
}
