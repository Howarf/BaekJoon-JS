let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const n = +input.shift();
let result;
function factorial(num) {
    if(num < 0) return -1
    else if(num == 0) return 1
    else return(num * factorial(num - 1))
}
result = factorial(n);
console.log(result);