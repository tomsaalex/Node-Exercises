var http = require('http');
var fs = require('fs');
var server = http.createServer(function callback(request, response) {
    var srcStream = fs.createReadStream(process.argv[3]);
    srcStream.pipe(response);
});
server.listen(process.argv[2]);
