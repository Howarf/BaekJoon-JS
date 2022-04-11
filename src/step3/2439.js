const fs = require('fs');
let input,result="";
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split('\r\n');
}
for(let i=1;i<=input;i++){
    result += " ".repeat(input-i)+"*".repeat(i)+"\n";
}
console.log(result);