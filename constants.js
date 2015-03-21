var http = require('http');
var conf = http.get('http://gist.githubusercontent.com/sinisterstuf/a42f0d4a6bd2c1c5613d/raw/c255f65d543b9914fb896c722816ab2143d74ff9/zsozsobot-constants.json');
console.log(conf);
// module.exports = JSON.parse(conf);
