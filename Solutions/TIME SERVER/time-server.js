var net = require('net');
var server = net.createServer(function (socket) {
    var date = new Date();
    var dateString = "".concat(date.getFullYear(), "-").concat((date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1), "-").concat(date.getDate());
    var hourString = "".concat(date.getHours(), ":").concat(date.getMinutes());
    socket.write(dateString + ' ' + hourString + '\n');
    socket.end();
});
server.listen(process.argv[2]);
