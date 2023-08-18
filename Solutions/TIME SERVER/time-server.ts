const net = require('net');
const server = net.createServer(function (socket){
    let date = new Date();
    let dateString = `${date.getFullYear()}-${(date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1): (date.getMonth() + 1)}-${date.getDate()}`;
    let hourString = `${date.getHours()}:${date.getMinutes()}`;

    socket.write(dateString + ' ' + hourString + '\n');
    socket.end();
})

server.listen(process.argv[2]);