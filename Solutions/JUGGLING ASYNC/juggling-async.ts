const http = require('http');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter ();

let totalData = ["", "", ""];

let finished = [false, false, false];
let printed = [false, false, false];

for(let i = 0; i <= 2; i++)
http.get(process.argv[i + 2], function(response){
    response.setEncoding('utf-8');

    response.on('data', function (data)
    {
        totalData[i] += data;
    })

    response.on('end', function()
    {
        finished[i] = true;
        eventEmitter.emit('finished');
    })
});


eventEmitter.on('finished', function(){

    for(let i = 0; i <= 2; i++)
    {
        if(!finished[i])
            break;
        if(!printed[i]) {
            printed[i] = true;
            console.log(totalData[i]);
        }
    }
})
