let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ").map(Number);
}
let result;
input.sort(function(a,b){return b - a});
if((input[1] + input[2]) > input[0]){
    result = input[1] + input[2] + input[0];
}
else{
    result = (input[1] + input[2]) * 2 - 1;
}
console.log(result);