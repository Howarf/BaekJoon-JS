let input,testCase;
const fs = require("fs")
if(process.platform === "linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
testCase = input[0];
for(let a = 0; a < testCase; a++){
    
    input.shift(0);
    input.shift(1);
}