let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const testCase = input.shift(0);
let sortArr = input.sort((a,b) => a.length-b.length || a.localeCompare(b));
const result = new Set(sortArr);
console.log(Array.from(result).join("\n"));