
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state) {
	  return calculate_move(game_state);
	  //var bet = 1100;
  },

  showdown: function(game_state) {

  }
};

function calculate_move(game_state) {
  try {
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
