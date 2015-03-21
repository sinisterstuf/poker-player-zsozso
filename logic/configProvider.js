module.exports = (function(){
  var conf = {};
  conf.betLimit = 20;
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