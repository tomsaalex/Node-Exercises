const http = require('http');
const fs = require('fs');

const server = http.createServer(function callback(request, response){
    const srcStream = fs.createReadStream(process.argv[3]);
    srcStream.pipe(response);
});

server.listen(process.argv[2]);