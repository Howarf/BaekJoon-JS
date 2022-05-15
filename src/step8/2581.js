let input,num = [],bool,sum = 0;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let M = Number(input.shift(0));
let N = Number(input.shift(0));
for(M; M <= N; M++){
    bool = true;
    if(M < 2){
        continue;
    }
    else if(M === 2){
        num.push(M);
        sum += M;
    }
    else{
        for(let j = 2; j <= M/2; j++){
            if(M % j === 0){
                bool = false;
                break;
            }
        }
        if(bool){
            num.push(M);
            sum += M;
        }
    }
}
sum === 0 ? console.log(-1) : console.log(sum+"\n"+Math.min.apply(null,num));