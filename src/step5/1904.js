let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const n = +input.shift();
const dp = Array(n).fill().map(el => []);

dp[1] = 1;
dp[2] = 2;

for(let i = 3; i <= n; i++){
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
}

console.log(dp[n]);