var logicProvider = require("./logicProvider");
var stateProvider = require("./stateProvider");

module.exports = (function(){


	this.wantToBet = function(){
		//TODO: logic from state
		var current_state = stateProvider.getCurrentState();
    console.log("POT!",stateProvider.getPot());
		//return BOOL
		return true;
	};

	this.canWeKeepCards = function() {
		//can we keep the cards
		//TODO make decision from state

		return true;
	};

	this.getCheckAmount = function() {
		//return logicProvider.getCheckAmount();
	};

	this.getBetAmount = function() {
		//return logicProvider.getBetAmount();
	};

	return this;
})();