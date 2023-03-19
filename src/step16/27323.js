let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(Number);
}
let [x,y] = input;
console.log(x*y);