const fs = require("fs");
let input;
let result=0;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
for(let i=1;i<=input;i++){
    let numArr = String(i);
    if(i<100){
        result++;
        continue;
    }
    else{
        let A = Number(numArr[0]) - Number(numArr[1]);
        let B = Number(numArr[1]) - Number(numArr[2]);
        if(A===B){
            result++;
        }
    }
}
console.log(result);