let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
let A = BigInt(input[0]);
let B = BigInt(input[1]);
let result = (A+B).toString();
console.log(result);