/**
 * Created by tmolnar on 3/21/15.
 */
module.exports = (function () {
    var winston = require('winston');
    require('winston-papertrail').Papertrail;
    var logger = new winston.Logger({
        transports: [
            new winston.transports.Papertrail({
                host: 'logs2.papertrailapp.com',
                port: 48393,
                timestamp: function() {
                    return new Date().toString();
                },
                logFormat : function(level, message) {
                    return '[' + level + '] ' + message;
                }
            })
        ]
    });
    return logger;
})();
