let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const numCase = Number(input.shift(0));
input = input.sort(function(a,b){
    return a - b;
}).map(el => parseInt(el));
console.log(input.join("\n"));