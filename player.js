module.exports = {

  VERSION: "Super Zsozso team",

  bet_request: function(game_state) {
    return calculate_move(game_state);
    //var bet = 1100;
  },

  showdown: function(game_state) {

  }
};

function calculate_move(game_state) {
  try {
    var bet = 110;
    var me = game_state["players"][game_state["in_action"]];
    var cards = me["hole_cards"];
    var first = cards[0];
    var second = cards[1];

    bet = game_state["current_buy_in"] - game_state["players"][game_state["in_action"]][game_state["bet"]] + game_state["minimum_raise"] + bet;


    if(

    if(isNaN(parseInt(bet))){
      bet = 1100;
    }
    console.log("DO BET: "+bet);
    return bet;
  } catch(e) {
    console.log('caught horrible exception; folding!');
    return 0;
  }
}
