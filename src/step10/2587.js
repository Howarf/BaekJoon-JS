let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let sum = 0;
input.sort();
input.map(el => (sum += Number(el)));
console.log((sum/input.length));
console.log(input.at((input.length/2)));