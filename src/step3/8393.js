const fs = require('fs');
let input,num=0;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
for(let i=0;i<=Number(input);i++){
    num += i;
}
console.log(num);