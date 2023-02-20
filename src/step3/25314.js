const fs = require("fs");
let input;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
let result = [];
for(let i = 0; i < input/4; i++){
    result.push("long");
}
console.log(result.join(" ")+" int");