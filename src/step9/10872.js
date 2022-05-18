let input,sum = 1;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
for(let i = 1; i <= input; i++){
    sum *= i;
}
console.log(sum);