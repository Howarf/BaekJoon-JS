const fs = require('fs');
let input,num,sum,i=0;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
num = input;
while(true){
    i++;
    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10)*10 + sum % 10;
    if(input==num){
        break;
    }
}
console.log(i);