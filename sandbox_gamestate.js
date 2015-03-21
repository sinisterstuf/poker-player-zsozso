var demo_state = require("./sample_game_state");

console.log("POT:", demo_state["players"][demo_state["in_action"]]["hole_cards"][0]["rank"]);
console.log("POT:", demo_state.pot);

setTimeout(function() {

}, 50000);
