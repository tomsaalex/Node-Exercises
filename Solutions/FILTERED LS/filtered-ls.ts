const fs = require('fs');

let extension = `.${process.argv[3]}`;

fs.readdir(process.argv[2], function(err, list){
    for(let imageName of list)
    {
        if(imageName.endsWith(extension))
            console.log(imageName);
    }
});