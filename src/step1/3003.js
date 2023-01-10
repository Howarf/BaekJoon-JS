let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
const setPice = [1,1,2,2,2,8];
let result = "";
for(let i = 0; i < input.length; i++){
    result += setPice[i] - input[i]+" ";
}
console.log(result);