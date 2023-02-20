const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ").map(Number);
}
let result = 0;
input.map(el => result += el);
console.log(result);