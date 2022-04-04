var fs = require('fs'); 
var input = fs.readFileSync('/dev/stdin').toString();
var a = parseInt(input);

for (let index = 1; index < 10; index++) {
    console.log(`${a} * ${index} = ${a*index}`);
}