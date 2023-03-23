let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ").map(Number);
}
const [a,b,c,d,e,f] = input;
let x = ((c * e) - (b * f)) / ((a * e) - (b * d));
let y = ((c * d) - (a * f)) / ((b * d) - (a * e));
console.log(x + " " + y);