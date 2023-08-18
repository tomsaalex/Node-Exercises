var fs = require('fs');
var fileContent = fs.readFileSync(process.argv[2]).toString();
var lines = fileContent.split('\n');
//console.log(lines);
console.log(lines.length - 1);
