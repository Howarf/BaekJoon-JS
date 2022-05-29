let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let N = Number(input);
let M = 0;
for(let i = 0; i < N; i++) {
    let sum = 0;
    let a = i;
    let str = a.toString();
    for(let j = 0; j < str.length; j++) {
        sum += parseInt(str[j]);
    }
    sum += a;
    if(sum == N) {
        M = a;
        break;
    }
}
console.log(M);  