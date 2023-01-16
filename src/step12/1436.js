let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const N = +input.shift();
let num = 666;
let count = 1;
while(count !== N){
    num++;
    if(String(num).includes("666")){
        count++;
    }
}
console.log(num);