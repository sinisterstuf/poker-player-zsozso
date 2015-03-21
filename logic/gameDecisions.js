//var logicProvider = require("./logicProvider");

module.exports = (function(){


	this.wantToBet = function(){
		//TODO: logic from state
		//var current_state = stateProvider.getCurrentState();

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