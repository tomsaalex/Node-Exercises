var mymodule = require('./mymodule');
mymodule(process.argv[2], process.argv[3], function (err, data) {
    if (err) {
        console.log(err);
    }
    data.forEach(function (x) { return console.log(x); });
});
