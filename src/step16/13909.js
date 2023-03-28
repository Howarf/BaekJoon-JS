let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
let count = 0;
for(let i = 1; i*i <= input; i++){
    count++;
}
console.log(count);