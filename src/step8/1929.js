let input,sum = [];
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
let M = Number(input.shift(0));
let N = Number(input.shift(0));
for(M; M <= N; M++){
    let bool = true;
    if(M < 2){
        bool = false;
    }
    for(let i = 2; i*i <= M; i++){
        if(M % i === 0){
            bool = false;
            break;
        }
    }
    if(bool){
        sum.push(M);
    }
}
console.log(sum.join("\n"));