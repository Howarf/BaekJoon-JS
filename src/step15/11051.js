let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ").map(Number);
}
const [N,K] = input;
let arr = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
for(let i = 0; i <= N; i++){
    for(let j = 0; j <= i; j++){
        if(i === j || j === 0){
            arr[i][j] = 1;
        }
        else{
            arr[i][j] = (arr[i-1][j-1] + arr[i-1][j]) % 10007;
        }
    }
}
console.log(arr[N][K]);