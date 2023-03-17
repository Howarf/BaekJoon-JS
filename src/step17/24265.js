let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let num = +input;
let result = 0;
for(let i = num-1; i > 0; i--){
    result += i;
}
console.log(result);
console.log(2);