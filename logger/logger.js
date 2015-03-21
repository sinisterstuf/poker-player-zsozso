/**
 * Created by tmolnar on 3/21/15.
 */
module.exports = (function () {
    var logentries = require('le_node');
    var logger = logentries.logger({
        token:'d4bb04e4-3a8d-42fc-abd4-b3094feb07ab'
    });

    return logger;
})();
