let input,sum = [],i = 2;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let num = Number(input.shift(0));
while(true){
    if(num % i === 0){
        num = num/i;
        sum.push(i);
        i = 1;
    }
    i++;
    if(i > num){
        break;
    }
}
console.log(sum.join("\n"));