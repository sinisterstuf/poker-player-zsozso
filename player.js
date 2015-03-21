
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state) {
    var bet = 55;
    if(game_state.minumum_raise) {
      bet = parseInt(game_state.minimum_raise) + bet;
    }
    return bet;
  },

  showdown: function(game_state) {

  }
};
