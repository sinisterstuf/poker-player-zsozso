module.exports = {};

function calculateMove(game_state) {
  try {

    if(gameDecision.wantToBet()) {
      return gameDecision.getBetAmount();
    } else if(gameDecision.canWeKeepCards()) {
      // keep the cards if we can check
      // TODO: return current bet!!!
      return gameDecision.getCheckAmount();
    } else {

      //FOLD THE CARDS;
      return 0;
    }
    
    var bet = 110;

    bet = game_state["current_buy_in"] - game_state["players"][game_state["in_action"]][game_state["bet"]] + game_state["minimum_raise"] + bet;

    if(isNaN(parseInt(bet))){
      bet = 1100;
    }
    console.log("DO BET: "+bet);
    return bet;
  } catch(e) {
    console.log('caught horrible exception; folding!');
    return 0;
  }
}
module.exports.calculateMove = calculateMove;
