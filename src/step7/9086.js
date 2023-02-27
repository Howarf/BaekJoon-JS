const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const t = input.shift();
let result = [];
for(let i = 0; i < t; i++){
    let s = input[i][0] + input[i][input[i].length-1];
    result.push(s);
}
console.log(result.join("\n"));