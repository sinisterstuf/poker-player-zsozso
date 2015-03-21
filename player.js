
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: 1000,

  showdown: function(game_state) {

  }
};

function calculate_move(game_state) {
  try {
    var bet = 55;
    //if(game_state.minumum_raise) {
      //bet = parseInt(game_state.minimum_raise) + bet;
	bet = game_state.current_buy_in - game_state.players[game_state.in_action][game_state.bet] + game_state.minimum_raise + 55;
    //}
	  if(isNaN(parseInt(bet))){
		  bet = 500;
	  }
    return bet;
  } catch(e) {
    console.log('caught horrible exception; folding!');
    return 0;
  }
}
