var http = require('http');
var EventEmitter = require('events');
var eventEmitter = new EventEmitter();
var totalData = ["", "", ""];
var finished = [false, false, false];
var printed = [false, false, false];
var _loop_1 = function (i) {
    http.get(process.argv[i + 2], function (response) {
        response.setEncoding('utf-8');
        response.on('data', function (data) {
            totalData[i] += data;
        });
        response.on('end', function () {
            finished[i] = true;
            eventEmitter.emit('finished');
        });
    });
};
for (var i = 0; i <= 2; i++) {
    _loop_1(i);
}
eventEmitter.on('finished', function () {
    for (var i = 0; i <= 2; i++) {
        if (!finished[i])
            break;
        if (!printed[i]) {
            printed[i] = true;
            console.log(totalData[i]);
        }
    }
});
