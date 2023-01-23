let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const N = input.shift();
input = input.sort((a, b) => a - b);
let answer = [];
let gcd = input[1] - input[0];
function getGCD(num1, num2){
    return (num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2));
}
for(let i = 2; i < N; i++){
    gcd = getGCD(gcd, input[i] - input[i - 1]);
}
for (let i = 2; i * i <= gcd; i++) {
    if (!(gcd % i)) {
        if (i === gcd / i){
            answer.push(i);
        }
        else {
            answer.push(i);
            answer.push(gcd / i);
        }
    }
}
answer.push(gcd);
answer = answer.sort((a, b) => a - b);
console.log(answer.join(" "));