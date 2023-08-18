const http = require('http');
const map = require('through2-map');

const server = http.createServer(function callback(request, response){
    if(request.method !== 'POST')
        return;


    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(process.argv[2]);