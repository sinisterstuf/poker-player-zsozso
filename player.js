
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state) {
    var bet = 55;
    //if(game_state.minumum_raise) {
      //bet = parseInt(game_state.minimum_raise) + bet;
	bet = game_state.current_buy_in - game_state.players[game_state.in_action][game_state.bet] + game_state.minimum_raise + 55;
    //}
    return bet;
  },

  showdown: function(game_state) {

  }
};
