module.exports = (function(){
  var conf = {
    "lameLimit": 10,
    "smallBet": 10,
    "bigBet": 70
  };
  this.getAll = function() {
    return conf;
  };
  this.get = function(k) {
    return conf[k]||"";
  };
  this.set = function(k, v) {
    conf[k]=v;
  };
  return this;
})();
