const http = require('http');
const map = require('through2-map');

const server = http.createServer(function callback(request, response){
    if(request.method !== 'GET')
        return;


    if(request.url.includes('/api/parsetime')) {

        let dateString = request.url.split(/=/g)[1];
        
        let actualDate = new Date(dateString);

        let responseObj = {};
        responseObj['hour'] = actualDate.getHours();
        responseObj['minute'] = actualDate.getMinutes();
        responseObj['second'] = actualDate.getSeconds();

        response.write(JSON.stringify(responseObj), 'utf-8');
    }
    else if (request.url.includes('/api/unixtime'))
    {

        let dateString = request.url.split(/=/g)[1];

        let actualDate = new Date(dateString);

        let responseObj = {};

        let unixTimeStamp = Math.floor(actualDate.getTime());
        responseObj['unixtime'] = unixTimeStamp;

        response.write(JSON.stringify(responseObj), 'utf-8');
    }
    else
    {
        response.write("I don't know how you even got here, but you did something wrong.", 'utf-8');
    }
    response.end();
});

server.listen(process.argv[2]);