var logic = require('logic');

module.exports = {

  VERSION: "Super Zsozso team",

  bet_request: function(game_state) {
    return logic.calculate_move(game_state);
  },

  showdown: function(game_state) {

  }
};
