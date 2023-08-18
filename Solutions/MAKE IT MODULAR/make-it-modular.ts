const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], (err, data) => {
    if(err) {
        console.log(err);
    }

    data.forEach(x => console.log(x));
});
