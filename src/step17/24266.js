let input;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
let result = BigInt(input)*BigInt(input - 1)*BigInt(input - 2)/BigInt(6);
console.log(result.toString());
console.log(3);