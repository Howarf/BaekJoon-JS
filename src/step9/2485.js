let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
function gcd (a, b){
    if(b===0)return a;
    else return gcd(b, a%b);
}
const trees = input.shift();
let first = input[0];
let list = [];
for(let i = 0; i < input.length; i++){
    let num = +input[i];
    list.push(num - first);
    first = num;
}
let g = list[0];
for(let i = 1; i < list.length; i++){
    g = gcd(g,list[i]);
}
let result = (input[input.length-1]-input[0]) / g-(trees-1);
console.log(result);