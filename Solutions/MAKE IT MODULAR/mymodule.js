var fs = require('fs');
function processDirectoryData(directoryName, fileNameExtension, callback) {
    var fileNames = [];
    fs.readdir(directoryName, function (err, list) {
        if (err)
            return callback(err);
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var imageName = list_1[_i];
            if (imageName.endsWith("." + fileNameExtension))
                fileNames.push(imageName);
        }
        return callback(null, fileNames);
    });
}
module.exports = processDirectoryData;
