const http = require('http');

let totalData = "";

http.get(process.argv[2], function(response){
    response.setEncoding('utf-8');

    response.on('data', function (data)
    {
        totalData += data;
    })

    response.on('end', function()
    {
        console.log(totalData.length);
        console.log(totalData);
    })
});
