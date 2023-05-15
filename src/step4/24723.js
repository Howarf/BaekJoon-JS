let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const n = +input.shift();
let sum = 1;
for(let i = 0; i < n; i++){
    sum *= 2;
}
console.log(sum);