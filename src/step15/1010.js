let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const T = input.shift();
function factorial(num){
    if(num <= 1) return 1;
    return(num * factorial(num - 1))
}
for(let i = 0; i < T; i++){
    const arr = input[i].split(" ");
    const N = parseInt(arr[0]);
    const M = parseInt(arr[1]);
    console.log(Math.round((factorial(M) / (factorial(M - N) * factorial(N)))));
}