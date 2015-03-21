module.exports = (function(){
  this.game_state = {};

  this.loadCurrentState = function(game_state){
    this.game_state = game_state;
  };

  return this;
})();