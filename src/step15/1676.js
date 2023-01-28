let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
let count = 0;
while(+input >= 5){
    count += parseInt(input / 5);
    input /= 5;
}
console.log(count);