let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
input[0] = input[0].split(" ");
const cardArr = input[1].split(" ").map(el => parseInt(el));
let N = input[0].shift(0);
let M = input[0].shift(0);
let max = 0;
for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
            for (let k = j + 1; k < N; k++) {
                let sum = cardArr[i] + cardArr[j] + cardArr[k];
                if (sum > max && sum <= M) {
                    max = sum;
                }
        }
    }
}
console.log(max);