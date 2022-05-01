const fs = require("fs");
let input;
let num = 1, count = 1;
if(process.platform=="linux"){
    input = fs.readFileSync("/dev/stdin").toString().trim();
}
else{
    input = fs.readFileSync("../data.txt").toString().trim();
}
while(num < Number(input)){
    num += 6*count;
    count++;
}   
console.log(count);