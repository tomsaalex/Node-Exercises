var fs = require('fs');
fs.readFile(process.argv[2], function callback(err, data) {
    if (err) {
        console.log("Something went wrong");
    }
    else {
        var lines = data.toString().split('\n');
        console.log(lines.length - 1);
    }
});
