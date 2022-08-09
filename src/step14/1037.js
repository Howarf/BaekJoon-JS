let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const N = input.shift();
const realN = input[0].split(" ").map(el=>parseInt(el));
const minN = Math.min.apply(null,realN);
const maxN = Math.max.apply(null,realN);
console.log(maxN*minN);