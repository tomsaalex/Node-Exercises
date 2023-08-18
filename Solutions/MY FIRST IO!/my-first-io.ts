const fs = require('fs');

let fileContent = fs.readFileSync(process.argv[2]).toString();

let lines = fileContent.split('\n');
console.log(lines.length - 1);

