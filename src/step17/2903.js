let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
const num = +input;
let fir = 2;
let result = 0;
for(let i = 0; i < num; i++){
    fir += Math.pow(2,i);
}
result = Math.pow(fir,2);
console.log(result);