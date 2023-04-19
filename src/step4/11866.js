let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const [n,k] = input[0].split(' ');
const arr = Array.from({length:n},(v, i) => i + 1);
const answer = [];
for(let i = 0; i < n; i++){
    for(let j = 1; j <= k; j++){
        if(j == k){
            answer.push(arr.shift());
        }
        else{
            arr.push(arr.shift());
        }
    }
}
console.log('<'+answer.join(', ')+'>')