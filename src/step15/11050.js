let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
let [N,K] = input;
let n = 1 , r = 1;
for(let i = N-K+1; i <= N; i++){
    n *= i;
}
for(let i = 1; i <= K; i++){
    r *= i;
}
console.log(n/r);