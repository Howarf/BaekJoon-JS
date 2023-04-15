let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n").map(Number);
}
const t = input.shift();
let answer = [];
const stack = [];
let stackNum = 1;
for(let i = 0; i < t; i++){
    let num = input[i];
    while(stackNum <= num){
        stack.push(stackNum++);
        answer.push("+");
    }
    let stackPop = stack.pop();
    answer.push("-");
    if(stackPop !== num){
        answer = ["NO"];
        break;
    }
}
console.log(answer.join("\n"));