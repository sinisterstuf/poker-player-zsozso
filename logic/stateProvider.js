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
  }

  return this;
})();