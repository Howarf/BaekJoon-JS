let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(el=>+el);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n').map(el=>+el);
}
let answer = [];
for(let i = 1; i <= 30; i++){
    if(input.includes(i)) continue;
    answer.push(i);
}
console.log(answer.join("\n"));