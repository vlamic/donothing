var fs = require('fs');

fs.appendFile('api.log', 'Application started at ' + new Date().toISOString() + '\n', function (err) {

});
