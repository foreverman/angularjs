var connect = require('connect');
var serveStatic = require('serve-static');
var server = connect();
server.use(serveStatic('.'));
server.listen(5000);

