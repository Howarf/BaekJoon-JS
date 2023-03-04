const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}
else{
    input = fs.readFileSync("../data.txt").toString().trim().split("\r\n");
}
const maxLength = Math.max(...input.map(el => el.length));
let awnser = "";
for(let i = 0; i < maxLength; i++){
    for(let j = 0; j < input.length; j++){
        awnser += input[j][i] || "";
    }
}
console.log(awnser);