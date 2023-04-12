let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(Number);
}
const t = input.shift();
let arr = [];
let answer = 0;
for(let i = 0; i < t; i++){
    if(input[i] === 0){
        arr.pop();
    }
    else{
        arr.push(input[i]);
    }
}
arr.map(el => answer += el);
console.log(answer);