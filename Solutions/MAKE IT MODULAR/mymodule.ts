const fs = require('fs');


function processDirectoryData(directoryName, fileNameExtension, callback)
{
    let fileNames = [];
    fs.readdir(directoryName, function(err, list){
        if(err) return callback(err);
        for(let imageName of list)
        {
            if(imageName.endsWith("." + fileNameExtension))
                fileNames.push(imageName);
        }
        return callback(null, fileNames);
    });

}

module.exports = processDirectoryData