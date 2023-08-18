var fs = require('fs');
var extension = ".".concat(process.argv[3]);
fs.readdir(process.argv[2], function (err, list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var imageName = list_1[_i];
        if (imageName.endsWith(extension))
            console.log(imageName);
    }
});
