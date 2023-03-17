let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let [a1,a0] = input[0].split(" ").map(Number);
let c = input[1];
let n = input[2];
a1 * n + a0 <= c * n && a1 <= c ? console.log(1) : console.log(0);