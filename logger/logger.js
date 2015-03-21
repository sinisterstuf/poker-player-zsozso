/**
 * Created by tmolnar on 3/21/15.
 */
module.exports = (function () {
    var request = require('request');

    var logger = function(message, isProd) {

        if (isProd) {
            var options = {
                url: "http://api.logentries.com/fb4d19bb-49e9-4e05-8451-1f3c06061d35/hosts/heroku/1927b208-82c7-4266-a8d0-ab6d5c6de2ca/?realtime=1",
                method: "put",
                body: {
                    data: message
                }
            };

            request(options, null);
        } else {
            console.log(message);
        }
    };
    return logger;
})();
