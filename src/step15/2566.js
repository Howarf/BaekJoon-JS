let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const arr = input.map(el => (el.split(" ").map(Number)));
let maxN = [];
for(let i = 0; i < 9; i++){
    maxN.push(Math.max(...arr[i]));
}
let num = Math.max(...maxN);
let a = maxN.indexOf(num);
console.log(num);
console.log((a+1)+" "+(arr[a].indexOf(num)+1));