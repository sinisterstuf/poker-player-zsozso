module.exports = (function(){
  console.log("--stateProvider");
  this.game_state = {};

  this.loadCurrentState = function(game_state){
    this.game_state = game_state;
  };

  this.getPot = function(){
    //handle
    return 222;
  };

  this.getCurrentState = function() {
    return this.game_state;
  };

  this.getMyCards = function() {
    return this.game_state["players"][this.game_state["in_action"]]["hole_cards"] || [];
  };

  this.getFlopCards = function() {
    return this.game_state["community_cards"];
  };

  return this;
})();