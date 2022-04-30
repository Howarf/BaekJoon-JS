const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(' ');
}
let fixed = Number(input[0]);
let variable = Number(input[1]);
let cost = Number(input[2]);
let margin = cost - variable;
let result = Math.floor(fixed / margin)+1;
console.log(margin <= 0 ? -1 : result);