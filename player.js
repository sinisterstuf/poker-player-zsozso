var logic = require('./logic');
var gameDecision = require("./logic/gameDecisions");

module.exports = {

  VERSION: "Super Zsozso team",

  bet_request: function(game_state){
    return logic.calculateMove(game_state);
  },

  showdown: function(game_state) {

  }
};
