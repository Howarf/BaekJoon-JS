const fs = require('fs');
let input
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
const count = new Set(input.map(x => x % 42)).size;
console.log(count);