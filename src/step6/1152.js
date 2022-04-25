const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split(" ");
}
console.log(input[0] === "" ? 0 : input.length);